import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoItem from '../components/VideoItem';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    //useQuery는 비동기 상태관리를 해주는 라이브러리 일뿐이다 네트워크 통신관리 문제 자체는 해결해 주지 않는다
    queryKey: ['videos', keyword],
    queryFn: () => youtube.search(keyword),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <p>Loding...</p>}
      {error && <p>error...</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
