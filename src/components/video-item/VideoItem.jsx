import React from 'react';
import formatAgo from '../../utils/date';
import viewTotalCount from '../../utils/date';

export default function VideoItem({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;
  return (
    <li>
      <img src={thumbnails.maxres.url} alt='thumbnails' />
      <p className='font-bold overflow-hidden text-ellipsis my-2 line-clamp-2'>
        {title}
      </p>
      <div className='text-s opacity-80'>
        <p>{channelTitle}</p>
        <p>
          {viewTotalCount(viewCount)} • {formatAgo(publishedAt)}
        </p>
      </div>
    </li>
  );
}
