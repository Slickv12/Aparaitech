import React, { useMemo, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import knowledge from '../../data/companyKnowledge.json';
import ChatWindow from './ChatWindow';

const getResponse = (input) => {
  const q = input.toLowerCase();
  if (q.includes('company') || q.includes('about')) return knowledge.company;
  if (q.includes('service')) return knowledge.services;
  if (q.includes('hiring') || q.includes('process') || q.includes('apply')) return knowledge.hiring;
  if (q.includes('job') || q.includes('role')) return knowledge.jobs;
  if (q.includes('contact') || q.includes('email')) return knowledge.contact;
  return 'I can help with company info, hiring process, jobs, and contact details.';
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 'b1', role: 'bot', text: 'Hi! I am Aparaitech assistant. Ask me about roles, process, or contact.' },
  ]);

  const onSend = (userText) => {
    const botText = getResponse(userText);
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'user', text: userText }, { id: crypto.randomUUID(), role: 'bot', text: botText }]);
  };

  const buttonIcon = useMemo(() => (open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />), [open]);

  return (
    <div id="chatbot-assistant" className="fixed bottom-6 right-6 z-50">
      {open && <div className="mb-3"><ChatWindow messages={messages} onSend={onSend} /></div>}
      <button onClick={() => setOpen((v) => !v)} className="rounded-full bg-blue-600 text-white p-4 shadow-lg hover:bg-blue-700" aria-label="Toggle chatbot">
        {buttonIcon}
      </button>
    </div>
  );
};

export default ChatBot;
