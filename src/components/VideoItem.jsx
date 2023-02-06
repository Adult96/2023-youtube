import React from 'react';
import formatAgo from '../utils/date';
import { useNavigate } from 'react-router-dom';

export default function VideoItem({ video, type }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={('cursor-pointer', isList ? 'flex gap-1 m-2' : '')}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url} //thumbnails.maxres? thumbnails.maxres.url
        alt='thumbnails'
      />
      <div>
        <p className='font-bold overflow-hidden text-ellipsis my-2 line-clamp-2'>
          {title}
        </p>
        <p className='text-s opacity-80'>{channelTitle}</p>
        <p className='text-s opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
