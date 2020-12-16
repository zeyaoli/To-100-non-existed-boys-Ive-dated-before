import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";

const SwipeButtons = ({ person, addLikedUser, removeUser }) => {
  const handleLike = () => {
    console.log(`You liked ${person.name}`);
    addLikedUser(person);
    removeUser(person);
  };

  const handleDislike = () => {
    console.log(`You disliked ${person.name}`);
    removeUser(person);
  };

  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons__repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__left' onClick={handleDislike}>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__right' onClick={handleLike}>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
