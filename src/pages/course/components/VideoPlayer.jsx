import React, { useRef, useState } from "react";

const VideoPlayer = ({ videoThumbnail, video }) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
    videoRef.current?.play();
  };

  const handlePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.paused ? vid.play() : vid.pause();
  };

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "800px",
      margin: -10,
    },
    thumbnailImage: {
      width: "100%",
      height: "auto",
      cursor: "pointer",
      display: isVideoPlaying ? "none" : "block",
      marginTop: -30,
    },
    videoWrapper: {
      position: "relative",
      width: "100%",
      display: isVideoPlaying ? "block" : "none",
    },
    video: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={videoThumbnail}
        alt="thumbnail"
        style={styles.thumbnailImage}
        onClick={handleThumbnailClick}
      />
      <div style={styles.videoWrapper}>
        <video
          ref={videoRef}
          loop
          onClick={handlePlayPause}
          style={styles.video}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
