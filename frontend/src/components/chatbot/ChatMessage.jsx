import React from 'react';

const ChatMessage = ({ role, text }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {text}
    </div>
  </div>
);

export default ChatMessage;
