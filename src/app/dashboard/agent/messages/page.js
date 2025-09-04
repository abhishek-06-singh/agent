'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import MessagesTabs from './components/MessagesTab'
import StartNewChatModal from './components/StartNewChatModal'
// import FormDetails from './components/Form/FormDetails'


export default function MessagesPage() {
  const [showMessages, setShowMessages] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyMessages, setPropertyMessages] = useState(false)
  const[isOpen,setIsOpen] = useState(false)
 const [chatType, setChatType] = useState('1:1')

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {propertyMessages ? (
       <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new messages, show default content */}
          {!showMessages ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Messages" subtitle={'Monitor and participate in sub-agent conversations'}/>
                <button
                  onClick={() => setIsOpen(true)} 
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> New Chat
                </button>
              </div>

              <div className="mt-4">
              <MessagesTabs/> 
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
            </>
          )}
          
        </>
      )}

       <StartNewChatModal
  open={isOpen}
  onCancel={() => setIsOpen(false)}
  onConfirm={() => {
    console.log('Chat type selected:', chatType);
    setIsOpen(false);
  }}
  chatType={chatType}
  setChatType={setChatType}
/>
     
    </div>
  )
}
