'use client'
import React from 'react'
import Heading from '../../components/minicomponents/Heading'
import Navbar from '../../components/minicomponents/Navbar'
import FormPage_Setting from './components/FormPage_Setting'

export default function SettingsPage() {
  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
          <Navbar />

        <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
            <Heading title="Settings" subtitle={'Manage your profile, preferences, and security settings.'}/>

              <button
                  onClick={() => setIsOpen(true)} 
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                > Save Changes
                </button>
              </div>
              <div className="mt-4">
                <FormPage_Setting/>
        </div>
    </div>
  )
}
