import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const messageRef = useRef(null);
  const { userProfile, selectedUser } = useSelector(
    (state) => state.userReducer
  );
  
  const isCurrentUser = userProfile?._id === messageDetails?.senderId;

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
        ref={messageRef}
        className={`chat ${isCurrentUser ? "chat-end" : "chat-start"}`}
      >
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="User Avatar"
              src={isCurrentUser ? userProfile?.avatar : selectedUser?.avatar}
            />
          </div>
        </div>
        <div className="chat-bubble bg-gray-700/70 text-white">
          {messageDetails?.message}
        </div>
        <div className="chat-footer opacity-50 text-xs">
          <time>12:45</time>
        </div>
      </div>
    </>
  );
};

export default Message;