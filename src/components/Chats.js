import React from "react";
import "./Chats.css";
import Chat from "./Chat";
const Chats = ({ likedUsers }) => {
  console.log(likedUsers);
  return (
    <div className='chats'>
      {likedUsers.map((user) => (
        <Chat
          key={user.id}
          name={user.name}
          message={user.message}
          profilePic={user.image}
        />
      ))}
      <Chat name='Sara' message='Hey! How are you?' profilePic='' />
    </div>
  );
};

export default Chats;
