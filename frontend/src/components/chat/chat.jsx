import React, { useState, useRef, useEffect } from 'react';
import './chat.css'

const ChatInterface = () => {
  const input = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');
const messagesContainer = document.querySelector('.chat-messages');

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
    const text = input.value.trim();
    if (text) {
        const message = createMessage(text, true);
        messagesContainer.appendChild(message);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
sendButton.addEventListener('click', sendMessage);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Disable/enable send button based on input
input.addEventListener('input', () => {
    sendButton.disabled = !input.value.trim();
});

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
        <textarea class="chat-input" placeholder="Type a message..."></textarea>
        <button class="send-button">Send</button>
    </div>
</div>
  );
};

export default ChatInterface;