'use client'

export default function QuickStats() {
  const stats = {
    total: 24,
    pending: 3,
    signed: 12,
  }

  return (
    <div className="bg-cardbg dark:bg-cardbg border border-bordercolor rounded-xl shadow-md p-4 w-full">

      <h3 className="text-base text-textnormal font-semibold mb-4">Quick Stats</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-textnormal">Total Documents</span>
          <span className="font-semibold text-textnormal">{stats.total}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-textnormal">Pending Signatures</span>
          <span className="font-semibold text-textnormal">{stats.pending}</span>

        </div>

        <div className="flex justify-between">
          <span className="text-textnormal">Signed This Month</span>
          <span className="font-semibold text-textnormal">{stats.signed}</span>

        </div>
      </div>
    </div>
  )
}
