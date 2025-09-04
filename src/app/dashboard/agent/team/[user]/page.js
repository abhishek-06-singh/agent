'use client'
import { Breadcrumb } from 'antd'
import Navbar from '../../../components/minicomponents/Navbar'
import AgentCard from './components/AgentCard'
import StatsCards from './components/StatsCards'
import DashboardTabs from './DashboardTabs'
export default function UserPage({ params }) {
  const { user } = params // dynamic segment
  const decodedUser = decodeURIComponent(user)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* AntD Breadcrumb with custom separator */}
      <div className="ml-10 mt-4">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/team">
                  Team
                </a>
              ),
            },
            {
              title: (
                <a
                  className="text-textnormal font-bold"
                  href="/dashboard/agent/team"
                >
                  {decodedUser}
                </a>
              ),
            },
          ]}
        />
      </div>

      <div className="ml-10 mt-4 ">
        <AgentCard />
      </div>
      <div className="ml-10 mt-4 ">
        <StatsCards />
      </div>
      <div className="ml-10 mt-4 ">
        <DashboardTabs decodedUser={decodedUser} />
      </div>
    </div>
  )
}
