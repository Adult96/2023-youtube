import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoItem from './VideoItem';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: related,
  } = useQuery(['related', id], () => youtube.relatedVideo(id), {
    staleTime: 1000 * 60 * 5,
    onSuccess: data => {
      console.log(data);
    },
  });
  return (
    <div>
      {isLoading && <p>Loding...</p>}
      {error && <p>error...</p>}
      {related && (
        <ul>
          {related.map(video => (
            <VideoItem key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </div>
  );
}
