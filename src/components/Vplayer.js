import React from "react";
import ReactPlayer from "react-player";
import Cicada from "./cicada_intro.mp4";
import "../styles/Vplayer.css";
// import { NavLink } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

const Vplayer = () => {
  return (
    <div className="player-wrapper">
      {/* <div className="text">
        Click to get trapped <br />
        <NavLink exact activeClassName="active_class" to="/login">
          <FontAwesomeIcon icon={faSkullCrossbones} color="red" />
        </NavLink>
      </div> */}
      <ReactPlayer
        className="react-player"
        controls
        width="100%"
        height="100%"
        url={Cicada}
        onEnded={() => (window.location.href = "/login")}
      />
    </div>
  );
};

export default Vplayer;
