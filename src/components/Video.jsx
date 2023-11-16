import React from "react";

const Video = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RydVXcd7t4s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5ubBNHMk1cs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
