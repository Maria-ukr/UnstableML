import React from 'react';

export default function VideoWrap(props) {
  const { video, classes } = props;
  return (
    <div className={classes}>
      <video autoPlay muted loop playsInline className='h-full w-auto rounded-[8px]'>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
