"use client";

import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../firebaseConfig";

export default function VideoUpload() {
  const [uploading, setUploading] = useState(false);

  async function uploadVideo(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, "videos/" + file.name);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await addDoc(collection(db, "videos"), { url, name: file.name });
      alert("Upload successful!");
    } catch (error) {
      alert("Upload failed: " + error);
    }
    setUploading(false);
  }

  return (
    <div>
      <input type="file" accept="video/*" onChange={uploadVideo} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
    </div>
  );
}
