import React, { useState, useEffect, useRef } from "react";
import {
  StreamChat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
} from "stream-chat-react";
import type {
  UserResponse,
  ChannelResponse,
  MessageResponse,
  TokenOrProvider,
} from "stream-chat";
import "stream-chat-react/dist/css/index.css";
import { useUser } from "@clerk/clerk-react";

const apiKey = "YOUR_STREAM_CHAT_API_KEY";
const channelType = "messaging";
const channelId = "general";

const client = StreamChat.getInstance(apiKey);

function Contact() {
  const [messages, setMessages] = useState<MessageResponse[]>([]);
  const chatOutputRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const userToken = user.publicMetadata.streamUserToken;
      client.connectUser(
        { id: user.id } as UserResponse,
        userToken as TokenOrProvider
      );
    }
  }, [user]);

  useEffect(() => {
    // fetch messages and set them as state
    const fetchMessages = async () => {
      const channel = client.channel(channelType, channelId) as Channel<
        DefaultGenerics,
        DefaultGenerics
      >;
      const result = await channel.query({ messages: { limit: 100 } });
      setMessages(result.messages);
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async (text: string) => {
    const channel = client.channel(channelType, channelId) as Channel<
      DefaultGenerics,
      DefaultGenerics
    >;
    await channel.sendMessage({ text });
  };

  return (
    <div className="Contact">
      <h1>Client Chat</h1>
      <Channel channel={client.channel(channelType, channelId)}>
        <Window>
          <ChannelHeader />
          <MessageList messages={messages} />
          <MessageInput sendMessage={handleSendMessage} />
        </Window>
      </Channel>
    </div>
  );
}

export default Contact;
