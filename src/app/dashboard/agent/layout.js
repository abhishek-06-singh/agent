'use client'

import { CommissionProvider } from '../../../../context/CommissionContext'
import SidebarWrapper from '../components/sidebar/SidebarWrapper' // client wrapper

export default function AgentLayout({ children }) {
  return (
    <CommissionProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - fixed */}
        <div className=" flex-shrink-0 border-r bg-backgroundColor text-textnormal z-50">
          <SidebarWrapper />
        </div>

        {/* Main Content - scrollable */}
        <main className="flex-1 overflow-y-auto bg-background z-40">
          {children}
        </main>
      </div>
    </CommissionProvider>
  )
}
