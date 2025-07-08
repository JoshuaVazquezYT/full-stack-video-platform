import React from "react";
import VideoUpload from "./components/VideoUpload";
import VideoList from "./components/VideoList";
import LivestreamEmbed from "./components/LivestreamEmbed";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">My Video Channel</h1>
      <VideoUpload />
      <VideoList />
      <h2 className="text-2xl font-semibold mt-10 mb-4">Live Stream</h2>
      <LivestreamEmbed />
    </div>
  );
}
