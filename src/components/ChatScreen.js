import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [message, setMessages] = useState({
    name: "Ellen",
    image: "",
    message: "What's up",
  });
  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH {message.name.toUpperCase()} ON 12/07/20
      </p>
      <div className='chatScreen__message'>
        <Avatar
          className='chatScreen__image'
          alt={message.name}
          src={message.image}
        />
        <p className='chatScreen__text'>{message.message}</p>
      </div>
    </div>
  );
};

export default ChatScreen;
