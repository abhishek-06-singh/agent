'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

const ChatList = ({ conversations, onSelect, selectedConversation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); 
  const filteredConversations = useMemo(() => {
  return conversations.filter((conv) => {
    const matchesSearch = conv.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === '1:1' && conv.isGroup) return false;
    if (filter === 'group' && !conv.isGroup) return false;

    return matchesSearch;
  });
}, [conversations, searchTerm, filter]);

  return (
    <div className="w-1/3 border-r border-bordercolor h-screen overflow-y-auto bg-cardbg p-4">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by agent name, property..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 mb-4 border border-bordercolor rounded-md text-sm focus:outline-none"
      />

      {/* 🗂 Filter Buttons */}
      <div className="flex space-x-2 mb-4 border-b border-bordercolor pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 text-sm rounded-md border ${
            filter === 'all' ? 'bg-buttonbg text-background' : 'bg-background text-textnormal border-bordercolor'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('1:1')}
          className={`px-3 py-1 text-sm rounded-md border ${
            filter === '1:1' ? 'bg-buttonbg text-background' : 'bg-background text-textnormal border-bordercolor'
          }`}
        >
          1:1 Chats
        </button>
        <button
          onClick={() => setFilter('group')}
          className={`px-3 py-1 text-sm rounded-md border ${
            filter === 'group' ? 'bg-buttonbg text-background' : 'bg-background text-textnormal border-bordercolor'
          }`}
        >
          Group Chats
        </button>
      </div>

      {/* 💬 Chat List */}
   {filteredConversations.map((conv, index) => (
  <div
    key={index}
    onClick={() => onSelect(conv)}
    className={`w-full py-3  cursor-pointer 
      border-b border-b-bordercolor 
      border-l-4 
      ${selectedConversation?.name === conv.name && selectedConversation?.extra === conv.extra
        ? 'border-l-buttonbg bg-cardbg'
        : 'border-l-transparent'}`}
  >
    <div className="flex items-start">
      <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={conv.avatar}
          alt={conv.name}
          width={56}
          height={56}
          className="object-cover"
        />
      </div>
      <div className="w-full pl-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-textheading">{conv.name}</div>
          <div className="text-xs text-textnormal">{conv.time}</div>
        </div>
        <div className="text-xs text-textnormal">{conv.extra}</div>

        {/* Role Badge */}
        <div className="mt-1 inline-block text-[10px] bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
          {conv.agent}
        </div>

        {/* Message Preview */}
        <div className="text-sm text-textnormal truncate mt-1">
          {conv.preview}
        </div>
      </div>
    </div>
  </div>
))}
    </div>
  );
};

export default ChatList;
