import React from "react";

const VideoComponent = ({ demo }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0">
      <iframe
        src={demo}
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        title="Project Demo"
      />
    </div>
  );
};

export default VideoComponent;

