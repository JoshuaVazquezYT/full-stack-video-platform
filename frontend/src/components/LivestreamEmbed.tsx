"use client";

import React from "react";

export default function LivestreamEmbed() {
  // Replace with your Owncast or Nginx RTMP HLS URL
  const livestreamUrl = "https://yourdomain.com/live/stream.m3u8";

  return (
    <div>
      <video
        id="live"
        width="600"
        controls
        autoPlay
        muted
        playsInline
        className="rounded"
      >
        <source src={livestreamUrl} type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
