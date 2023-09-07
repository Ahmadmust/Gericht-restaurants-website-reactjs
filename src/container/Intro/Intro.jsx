import React from 'react';
import {BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import {meal} from '../../constants'

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidRef = React.useRef()
  return(
      <div className='intro-video'>
        <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted />
     
        <div className='video-overlay flex-center'>
          <div className="video-overlay-circle flex-center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (<BsPauseFill color="#fff" fontSize={30} />) : (
            <BsFillPlayFill color="#fff" fontSize={30} />)}
          </div>
          </div>
      </div>
  );
}

export default Intro;
