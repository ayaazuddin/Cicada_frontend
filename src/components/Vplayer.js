import React from "react";
import ReactPlayer from "react-player";
import Cicada from "./cicada_intro.mp4";
// import "../styles/Vplayer.css";

const Vplayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls
        width="100%"
        height="100%"
        url={Cicada}
        onEnded={() => console.log("onEnded callback")}
      />
    </div>
  );
};

export default Vplayer;
