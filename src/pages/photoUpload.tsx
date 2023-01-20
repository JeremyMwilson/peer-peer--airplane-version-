import React, { useState } from "react";
import SidebarMenu from "../components/SidebarMenu";
import styles from "./pages/photoUpload.module.css";
import { useAuth } from "./pages/AuthProvider";
import axios from "axios";

function PhotoUpload() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>(null);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);

  const handleLogout = () => {
    // Handle logout here (set loggedIn state to false and clear user data)
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(file);
      setPhotoUrl(reader.result);
      setPhotoUploaded(true);
      setPhotoPreviewUrl(reader.result as string); // Set photoPreviewUrl state
    };

    reader.readAsDataURL(file);
  };

  const handleImageDelete = () => {
    setPhoto(null);
    setPhotoUrl(null);
    setPhotoUploaded(false);
    setPhotoPreviewUrl(null);
  };

  const handleImageReupload = () => {
    setPhoto(null);
    setPhotoUrl(null);
    setPhotoUploaded(false);
    setPhotoPreviewUrl(null);
    (document.getElementById("image-upload") as HTMLInputElement).value = "";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!photo) return;
    const formData = new FormData();
    formData.append("photo", photo);

    axios
      .post("/api/upload-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        console.log("Photo uploaded successfully!");
      })
      .catch((error) => {
        console.log("Error uploading photo:", error);
      });
  };

  if (!loggedIn) {
    return <div className="login-container">{/* Login form goes here */}</div>;
  }

  return (
    <div className="photo-upload-container">
      <SidebarMenu />
      {photoUploaded ? (
        <div className="photo-preview-container">
          <img
            className="photo-preview"
            src={photoPreviewUrl}
            alt="Uploaded photo"
          />
          <div className="photo-actions">
            <button className="delete-button" onClick={handleImageDelete}>
              Delete
            </button>
            <button className="reupload-button" onClick={handleImageReupload}>
              Reupload
            </button>
          </div>
        </div>
      ) : (
        <div className="upload-container">
          <input id="image-upload" type="file" onChange={handleImageUpload} />
          <button
            className="upload-button"
            disabled={!photo}
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default PhotoUpload;
