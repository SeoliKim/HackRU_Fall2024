import React, { useState, useRef, useEffect } from 'react';
import './chat.css'

const ChatInterface = () => {

  const [msg, setMsg] = useState('');
  const messagesContainer = useRef(null);
  useEffect(() => {
    messagesContainer.current = document.querySelector('.chat-messages');
  }
  )

  function createMessage(text, isSent) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;

    const content = document.createElement('div');
    content.className = 'message-content';
    content.textContent = text;

    const time = document.createElement('div');
    time.className = 'message-time';
    time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.appendChild(content);
    messageDiv.appendChild(time);

    return messageDiv;
  }

  function sendMessage() {
    const text = msg.trim();
    if (text) {
      const message = createMessage(text, true);
      messagesContainer.current.appendChild(message);
      setMsg('');
      messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight;
    }
  }

  return (
    <div class="chat-container">
      <div class="chat-header">
        <div class="online-indicator"></div>
        <span>Chat</span>
      </div>

      <div class="chat-messages">
        <div class="message received">
          <div class="message-content">Hey! How are you?</div>
          <div class="message-time">10:30 AM</div>
        </div>

        <div class="message sent">
          <div class="message-content">I'm doing great! Thanks for asking. How about you?</div>
          <div class="message-time">10:31 AM</div>
        </div>

        <div class="message received">
          <div class="message-content">I'm good too! What are you up to?</div>
          <div class="message-time">10:32 AM</div>
        </div>
      </div>

      <div class="chat-input-container">
        <input class="chat-input" value={msg} onChange={(e) => setMsg(e.target.value)}/>
        <button class="send-button" onClick={sendMessage} >Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;