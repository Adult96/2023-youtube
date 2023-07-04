import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoItem from '../components/VideoItem';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { VideoParamType } from '../types/client';

export const Videos: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<[], Error>({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video: VideoParamType) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Videos;
