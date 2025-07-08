"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface Video {
  id: string;
  url: string;
  name: string;
}

export default function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const querySnapshot = await getDocs(collection(db, "videos"));
      const vids: Video[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        vids.push({ id: doc.id, url: data.url, name: data.name });
      });
      setVideos(vids);
    }
    fetchVideos();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Your Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <video key={video.id} src={video.url} controls className="w-full rounded" />
        ))}
      </div>
    </div>
  );
}
