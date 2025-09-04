
import React from 'react'
import Navbar from '../components/minicomponents/Navbar'
import Heading from '../components/minicomponents/Heading'
import StatCards from '../components/minicomponents/StatsCards'
import PropertyActivityOverview from '../components/minicomponents/PropertyActivityOverview'
import VisualAnalytics from '../components/minicomponents/VisualAnalytics'

export default function AgentDashboard() {
  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="ml-10 mt-4">
        <Heading
          title="Welcome back, John"
          subtitle="Here's what's happening with your business today."
        />
      </div>
      <div className="ml-10 mt-4">
        <StatCards />
      </div>
      <div className="ml-10 mt-4">
        <PropertyActivityOverview />
      </div>
      <div className="ml-10 mt-4">
        <VisualAnalytics />
      </div>
    </div>
  )
}
