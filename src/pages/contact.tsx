import React, { useState, useEffect, useRef } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Window,
  MessageList,
  MessageInput,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";
import { useUser } from "@clerk/clerk-react";

const apiKey = "kcr8y24ntv2w";
const channelType = "messaging";
const channelId = "general";

const client = StreamChat.getInstance(apiKey);

function Contact() {
  const [messages, setMessages] = useState<
    MessageResponse<DefaultUserType, DefaultChannelType>[]
  >([]);
  const chatOutputRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const userToken = user.publicMetadata.streamUserToken;
      client.connectUser({ id: user.id }, userToken);
    }
  }, [user]);

  useEffect(() => {
    // fetch messages and set them as state
    const fetchMessages = async () => {
      const channel = client.channel(channelType, channelId);
      const result = await channel.query({ messages: { limit: 100 } });
      setMessages(result.messages);
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async (text: string) => {
    const channel = client.channel(channelType, channelId);
    await channel.sendMessage({ text });
  };

  return (
    <div className="Contact">
      <h1>Client Chat</h1>
      <Chat client={client}>
        <Channel channel={client.channel(channelType, channelId)}>
          <Window>
            <ChannelHeader />
            <MessageList messages={messages} />
            <MessageInput sendMessage={handleSendMessage} />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
}

export default Contact;
