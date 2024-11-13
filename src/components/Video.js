// src/components/video.js
import React, { useState } from 'react';
// import Sidebar from './Sidebar';
import Sidebar from './Sidebar';
import '../assets/css/Video.css';

function Video() {
        const [showTranscribe, setShowTranscribe] = useState(false);
        const [showTranslate, setShowTranslate] = useState(false);
      
        const handleTranscribeClick = () => {
          setShowTranscribe(true);
          setShowTranslate(false);
        };
      
        const handleTranslateClick = () => {
          setShowTranslate(true);
          setShowTranscribe(false);
        };

  return (
    
    <div className="main-container">
      <Sidebar />
      <div className="video-content">
        {/* Your existing video content here */}
        
        <div className="video-player">
          {/* <p>Video Placeholder</p> */}
          <video controls width="50%" height="500px">
        <source src="/assets/video/HTML clip.mp4" type="video/mp4" />
        {/* <source src="path-to-your-video-file.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="course-details">
          <h3>Web Design for Web Developers</h3>
          <p>Learn web design in 1 hour with simple-to-use rules and guidelines.</p>
        </div>
        <div>
      <button className="btn btn-large" onClick={handleTranscribeClick}>
        Transcribe Now
      </button>
      <button className="btn btn-large ml-3" onClick={handleTranslateClick}>
        Translate Now
      </button>
      
      {showTranscribe && <div className="transcribed">Transcribed text</div>}
      {showTranslate && <div className="translate">Translated text</div>}
    </div>
        {/* <button className="btn btn-large">Transcribe Now</button>
        <button className='btn btn-large ml-3'>Translate Now</button>
        <div className='transcribed'>
            transcribed text
        </div>
        <div className='translate'>Translated text</div> */}
        {/* <button className="btn btn-large">Watch Now</button> */}
      </div>
    </div>
    
  );
}

export default Video;
