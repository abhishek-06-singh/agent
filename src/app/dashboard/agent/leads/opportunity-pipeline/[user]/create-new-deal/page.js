'use client'
import { Breadcrumb } from 'antd'
import NewDealPage from '../components/createnewdeal_components/NewDealPage'


export default function CreateNewDeal({ params }) {
  const { user } = params
  const decodedUser = decodeURIComponent(user)

  return (
    <div className="p-6 flex flex-col space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb
        separator=">"
        items={[
          { title: <a href="/dashboard/agent/leads">Leads</a> },
          {
            title: (
              <a href={`/dashboard/agent/leads/opportunity-pipeline/${decodedUser}`}>
                {decodedUser}
              </a>
            ),
          },
          { title: 'Create New Deal' },
        ]}
      />
      <NewDealPage/>
    </div>
  )
}