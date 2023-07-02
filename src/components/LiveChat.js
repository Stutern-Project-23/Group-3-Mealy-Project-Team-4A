import React, { useState } from "react";
import "../styles/LiveChat.css";
import send from "../images/send.png";
import chat from "../images/chat.png";
import arrow from "../images/arrow-down.png";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className='live-chat'>
      {isOpen && <div className='overlay-a'  />}
      {isOpen && (
        <div className='chat-window'>
          <div className='chat-header'>
            <h3>Paris Bakery</h3>
            <p>Ask us anything, or share your feedback with us!</p>
          </div>
          <div className='chat-body'>
            {messages.map((message, index) => (
              <div key={index} className='message'>
                {message}
              </div>
            ))}
          </div>
          <form className='chat-form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Type your message...'
              value={newMessage}
              onChange={handleInputChange}
            />
            <button type='submit'>
              <img src={send} alt='send' />
            </button>
          </form>
        </div>
      )}
      <button className='chat-toggle' onClick={toggleChat}>
        {isOpen ? <img src={arrow} alt="close" className="close-message"/> : <img src={chat} alt="open"/>}
      </button>
    </div>
  );
};

export default LiveChat;
