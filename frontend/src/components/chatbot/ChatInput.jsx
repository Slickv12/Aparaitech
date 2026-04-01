import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <form onSubmit={submit} className="flex gap-2 border-t pt-3">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask about company, jobs, hiring..." className="input-field py-2" />
      <button className="btn-primary py-2 px-4">Send</button>
    </form>
  );
};

export default ChatInput;
