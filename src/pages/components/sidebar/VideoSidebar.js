import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
//import ShareIcon from "@mui/icons-material/Share";
import WhatsLogo from "./whatsapp-logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function VideoSidebar({ likes, messages, profile, whatsshares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_options">
        <AccountCircleIcon fontSize="large" />
        <p>{profile}</p>
      </div>  
      <div className="videoSidebar_options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSidebar_options">
        <ChatIcon fontSize="large" />
        <p>{messages} </p>
      </div>
      <div className="videoSidebar_options">
        <img src={WhatsLogo} alt="Whatsapp" className="whatsapp" />
        <p>{whatsshares}</p>
      </div>
      
    </div>
  );
}
export default VideoSidebar;
