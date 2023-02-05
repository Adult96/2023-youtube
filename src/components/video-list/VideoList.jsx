import React from 'react';
import VideoItem from '../video-item/VideoItem';

export default function VideoList({ videos }) {
  console.log(videos);
  return (
    <ul>
      {videos.items.map((video, i) => (
        <li key={i}>
          <VideoItem video={video} />
        </li>
      ))}
    </ul>
  );
}
