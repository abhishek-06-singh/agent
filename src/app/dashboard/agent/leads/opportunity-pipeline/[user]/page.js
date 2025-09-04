'use client'
import { Breadcrumb } from 'antd'
import Navbar from '../../../../components/minicomponents/Navbar'
import OpportunityContent from './components/OppurtunityContent'


export default function UserPage_Opportunity({ params }) {
  const { user } = params // dynamic segment
  const decodedUser = decodeURIComponent(user)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* AntD Breadcrumb with custom separator */}
      <div className="ml-10 mt-4 text-textheading">
        <Breadcrumb  

          separator=">"
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/leads/opportunity-pipeline">
                  Opportunity Pipeline
                </a>
              ),
            },
            {
              title: (
                <a
                  className="text-textnormal font-bold"
                  href="/dashboard/agent/leads/opportunity-pipeline"

                >
                  {decodedUser} Profile
                </a>
              ),
            },
          ]}
        />
      </div>
      <OpportunityContent user={decodedUser} />



</div>
  )
}
