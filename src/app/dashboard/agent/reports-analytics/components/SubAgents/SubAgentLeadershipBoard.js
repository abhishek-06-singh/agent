'use client'
import React from 'react'

const leaderboardData = [
  {
    id: 1,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    listings: 12,
    leads: 20,
    offers: 12,
    closings: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    listings: 9,
    leads: 20,
    offers: 12,
    closings: 4,
  },
  {
    id: 3,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    listings: 8,
    leads: 20,
    offers: 12,
    closings: 3,
  },
]

export default function SubAgentLeaderBoard() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-sm overflow-x-auto">
      <h2 className="text-base font-semibold text-textheading mb-4">Sub-Agent Leaderboard</h2>
        <table className="w-full table-fixed min-w-[700px]">
  <thead>
    <tr className="text-left text-xs text-textplaceholder border-b border-bordercolor">
      <th className="py-3 px-2 w-[30%]">Sub-Agent</th>
      <th className="py-3 px-2 text-center w-[14%]">Listings</th>
      <th className="py-3 px-2 text-center w-[14%]">Leads</th>
      <th className="py-3 px-2 text-center w-[14%]">Offers</th>
      <th className="py-3 px-2 text-center w-[14%]">Closings</th>
      <th className="py-3 px-2 text-center w-[14%]">Actions</th>
    </tr>
  </thead>

  <tbody>
    {leaderboardData.map((agent) => (
      <tr
        key={agent.id}
        className="border-b border-bordercolor hover:bg-hover transition"
      >
        {/* Agent Info */}
        <td className="py-4 px-2">
          <div className="flex items-center gap-2">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm font-medium text-textnormal">{agent.name}</div>
          </div>
        </td>

        {/* Listings */}
        <td className="text-sm text-center text-textnormal px-2">
          {agent.listings}
        </td>

        {/* Leads */}
        <td className="text-sm text-center text-textnormal px-2">
          {agent.leads}
        </td>

        {/* Offers */}
        <td className="text-sm text-center text-textnormal px-2">
          {agent.offers}
        </td>

        {/* Closings */}
        <td className="text-sm text-center text-textnormal px-2">
          {agent.closings}
        </td>

        {/* Actions */}
        <td className="text-center px-2">
          <button className="border border-buttonbg text-textnormal text-xs px-4 py-1 rounded-full hover:bg-buttonbg hover:text-white transition">
            View Profile
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}
