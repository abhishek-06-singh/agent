'use client'

import { Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const InvitationsList = ({ invitations, activeTab }) => {
  const menu = (
    <Menu
      items={[
        { key: '1', label: 'Resend Invite' },
        { key: '2', label: 'Revoke Access' },
      ]}
    />
  )

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-textheading font-medium">Your Invitations</h3>

        {activeTab === 'external' ? (
          <span className="text-xs border rounded-full px-3 py-1 text-textnormal">
            {invitations.length} Active Invites
          </span>
        ) : (
          <p className="text-sm text-textnormal">
            {invitations.length} Active Invites
          </p>
        )}
      </div>

      <div className="mt-3 border rounded-xl overflow-hidden">
        {/* Table Header */}
        <div
          className={`grid ${
            activeTab === 'external' ? 'grid-cols-5' : 'grid-cols-4'
          } gap-4 bg-gray-50 px-4 py-5 text-sm font-medium text-textnormal`}
        >
          <p>Invited Email</p>
          <p>Status</p>
          <p>Date Invited</p>
          {activeTab === 'external' && <p>Expires In</p>}
          <p>Actions</p>
        </div>

        {/* Table Rows */}
        {invitations.map((inv, idx) => (
          <div
            key={idx}
            className={`grid ${
              activeTab === 'external' ? 'grid-cols-5' : 'grid-cols-4'
            } gap-4 px-4 py-6 border-t text-sm text-textnormal items-center`}
          >
            <p>{inv.email}</p>

            {/* Status pill for external, plain text for others */}
            {activeTab === 'external' ? (
              <p
                className={` ${
                  inv.status === 'Pending'
                    ? 'text-yellow-500'
                    : inv.status === 'Accepted'
                      ? 'text-green-500'
                      : 'text-red-500'
                }`}
              >
                {inv.status}
              </p>
            ) : (
              <p
                className={` ${
                  inv.status === 'Pending'
                    ? 'text-yellow-500'
                    : inv.status === 'Accepted'
                      ? 'text-green-500'
                      : 'text-red-500'
                }`}
              >
                {inv.status}
              </p>
            )}

            <p>{inv.date}</p>
            {activeTab === 'external' && <p>{inv.expiresIn || '-'}</p>}

            <Dropdown overlay={menu} trigger={['click']}>
              <MoreOutlined className="cursor-pointer text-lg" />
            </Dropdown>
          </div>
        ))}
      </div>

      {/* Bottom Note only for external */}
      {activeTab === 'external' && (
        <div className="mt-4 bg-gray-100 rounded-lg p-3 text-xs text-textnormal">
          ⚠️ Temporary Access <br />
          External collaborators can be invited for 3, 5, or 7 days. Upgrade
          your plan for longer or permanent access.
        </div>
      )}
    </div>
  )
}

export default InvitationsList
