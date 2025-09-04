'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Dropdown, Menu } from 'antd';
import { PlusOutlined, MoreOutlined, PaperClipOutlined } from '@ant-design/icons';
import { Contact, Send, UserPlus } from 'lucide-react';
import InviteModal from './InviteModal';


const ChatWindow = ({ conversation ,onOpenGroupSettings }) => {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

    const meAvatar = 'https://i.pravatar.cc/150?img=12';

  if (!conversation) {
    return (
      <div className="w-full lg:w-2/3 flex items-center justify-center text-textnormal  h-screen">
        Select a conversation
      </div>
    );
  }

  const handleMenuClick = ({ key }) => {
if (key === 'groupSettings' && onOpenGroupSettings) {
  onOpenGroupSettings(); 
}
};

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Edit Contact</Menu.Item>
    <Menu.Item key="2">Delete Conversation</Menu.Item>
    <Menu.Item key="groupSettings">Group Settings</Menu.Item>
  </Menu>
);
  const isToday = (timeStr) => {
    // Simple check – in real use case use timestamps
    const today = new Date().toDateString();
    const messageDate = new Date().toDateString(); // All messages are hardcoded to today
    return today === messageDate;
  };

  const showDateHeader = (index) => {
    if (index === 0) return true;
    // For real logic: compare message dates
    return false;
  };
  

  return (
    <div className="w-full lg:w-2/3 flex flex-col h-screen bg-cardbg">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-bordercolor">
        <div className="flex items-center space-x-3">
          <Image
            src={conversation.avatar}
            alt={conversation.name}
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-textheading">
              {conversation.name}
            </h2>
            <p className="text-sm text-textnormal">{conversation.agent}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            icon={< UserPlus className='w-4 h-4'/>}
            className="border border-bordercolor bg-cardbg text-textnormal"
            onClick={() => setIsInviteModalOpen(true)}
          >
            Invite
          </Button>
          <Dropdown overlay={menu} trigger={['click']}  className="bg-transparent">
           
            <Button
              icon={<MoreOutlined className='text-textnormal w-6 h-6' />}
              className="border-none p-2"
            />
          </Dropdown>
        </div>
      </div>

      {/* Messages */}
       <div className="flex-1 overflow-y-auto p-6 space-y-6">

{conversation.messages.length > 0 ? (
  conversation.messages.map((msg, index) => {
    const isGroup = conversation.isGroup;
    const isMe = msg.from === 'me';

    // For 1:1 chat: define avatars and names for me/them
    const themAvatar = conversation.avatar;
    const themName = conversation.name;
    const meName = 'Me'; // Or your username

    return (
      <div key={index} className="flex items-center justify-center flex-col space-y-1">
        <div className={`flex items-end ${isMe ? 'justify-end' : 'justify-start'}`}>
          {!isMe && (
            <>
              {isGroup ? (
                <Image
                  src={msg.avatar}
                  alt={msg.from}
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
              ) : (
                // 1:1: show conversation avatar + name for "them"
                <div className="flex items-center mr-2 space-x-2">
                  <Image
                    src={themAvatar}
                    alt={themName}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              )}
            </>
          )}

          <div
            className={`px-4 py-2 rounded-lg text-sm max-w-[70%] ${
              isMe
                ? 'bg-buttonbg text-background'
                : 'bg-background border border-bordercolor text-textnormal'
            }`}
          >
            {isGroup && !isMe && (
              <div className="text-xs font-semibold text-textheading mb-1">{msg.from}</div>
            )}
            {msg.text}
          </div>

          {isMe && (
            <>
              {isGroup ? (
                <Image
                  src={msg.avatar}
                  alt="me"
                  width={32}
                  height={32}
                  className="rounded-full ml-2"
                />
              ) : (
                // 1:1: show me avatar + name
                <div className="flex  items-center ml-2 space-x-2">
                  <Image
                    src={meAvatar}
                    alt={meName}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  
                </div>
              )}
            </>
          )}
        </div>

        <div
          className={`text-[10px] text-textnormal mt-1 ${
            isMe ? 'text-right pr-10' : 'text-left pl-10'
          }`}
        >
          {msg.time}
        </div>
      </div>
    );
  })
) : (
  <div className="text-textnormal text-sm text-center mt-8">No messages in this conversation yet.</div>
)}

      </div>
      <div className='w-full flex justify-between items-center bg-shadow p-4'>
        <p className='text-textnormal font-semibold text-sm'>Instantly get ur document signed via Zapsign</p>
        <Button className='text-xs rounded-md bg-background text-textnormal border border-bordercolor'>Send Document for Signature</Button>
      </div>

      {/* Input box */}
      <div className="p-4 flex items-center gap-x-3 border-t border-bordercolor">
  {/* Attach Button */}
  <button className="text-textnormal">
    <PaperClipOutlined className="w-5 h-5" />
  </button>

  {/* Message Input */}
  <input
    type="text"
    placeholder="Type your message..."
    className="flex-1 px-4 py-2 rounded-md border border-bordercolor focus:outline-none text-sm text-textnormal bg-background"
  />

  {/* Send Button */}
  <button className="bg-buttonbg rounded-md p-2 flex items-center justify-center">
    <Send className="w-5 h-5 text-background" />
  </button>
</div>
 <InviteModal
  open={isInviteModalOpen}
  onCancel={() => setIsInviteModalOpen(false)}
  onConfirm={({ email, role }) => {
    console.log('Inviting:', email, 'as', role);
    setIsInviteModalOpen(false);
  }}
/>
    </div>
   
  );
};

export default ChatWindow;
