import React from "react";

const MovieFrame = ({ currentKey }) => {
  let source = `"https://www.youtube.com/embed/${currentKey}" `;
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default MovieFrame;
