import React from "react";

const Song = ({ currentSong }) => {
  const { name, artist, cover } = currentSong; // Destructure the props

  return (
    <div className="song-container">
      <img alt={name} src={cover} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
