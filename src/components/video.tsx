import React from "react";
import "./video.scss";

interface VideoI {
  videoSrcURL: string;
  videoTitle: string;
  autoplay?: boolean;
  videoProps?: Partial<HTMLVideoElement>;
}

const Video = ({
  videoSrcURL,
  videoTitle = "",
  autoplay = false,
  ...videoProps
}: VideoI) => (
  <div className="video">
    <video autoPlay muted loop {...videoProps}>
      <source src={videoSrcURL} title={videoTitle} type="video/mp4" />
    </video>
  </div>
);
export default Video;
