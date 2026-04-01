import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow = ({ messages, onSend }) => (
  <div className="card w-80 h-96 flex flex-col p-3">
    <div className="flex-1 space-y-2 overflow-auto pr-1">
      {messages.map((m) => <ChatMessage key={m.id} role={m.role} text={m.text} />)}
    </div>
    <ChatInput onSend={onSend} />
  </div>
);

export default ChatWindow;
