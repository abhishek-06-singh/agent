"use client"
import { Dropdown, Button } from "antd"
import { MoreOutlined } from "@ant-design/icons"

export default function DesktopReportsTable({
  currentItems,
  selected,
  allChecked,
  toggleSelectAll,
  toggleRow,
  getMenu,
  statusStyles,
}) {
  return (
    <table className="min-w-full text-left table-auto">
      <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
        <tr>
          <th className="p-4">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-bordercolor"
              checked={allChecked}
              onChange={(e) => toggleSelectAll(e.target.checked)}
            />
          </th>
          <th className="p-4">Property</th>
          <th className="p-4">Sub-Agent</th>
          <th className="p-4">Lead</th>
          <th className="p-4">Total Commission</th>
          <th className="p-4">Split</th>
          <th className="p-4">Status</th>
          <th className="p-4">Last Updated</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-bordercolor">
        {currentItems.map((item) => (
          <tr key={item.id} className="hover:bg-boxbg transition">
            {/* Checkbox */}
            <td className="p-4">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-bordercolor"
                checked={selected.includes(item.id)}
                onChange={() => toggleRow(item.id)}
              />
            </td>

            {/* Property */}
            <td className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.property.image}
                  className="w-14 h-10 rounded-md object-cover"
                  alt={item.property.name}
                />
                <div className="min-w-0 text-sm">
                  <div className="font-medium text-textnormal">{item.property.name}</div>
                  <div className="text-xs text-textplaceholder">
                    {item.property.priceRange}
                  </div>
                </div>
              </div>
            </td>

            {/* Sub-Agent */}
            <td className="p-4">
              <div className="flex items-center gap-2">
                <img
                  src={item.subAgent.avatar}
                  className="w-8 h-8 rounded-full text-textnormal"
                  alt={item.subAgent.name}
                />
                <div className="text-sm">
                  <div className="font-medium text-textnormal">{item.subAgent.name}</div>
                  <div className="text-xs text-textplaceholder">
                    {item.subAgent.role}
                  </div>
                </div>
              </div>
            </td>

            {/* Lead */}
            <td className="p-4">
              <div className="flex items-center gap-2">
                <img
                  src={item.lead.avatar}
                  className="w-8 h-8 rounded-full"
                  alt={item.lead.name}
                />
                <span className="text-sm text-textnormal">{item.lead.name}</span>
              </div>
            </td>

            {/* Total Commission */}
            <td className="p-4 text-sm font-medium text-textnormal">{item.totalCommission}</td>

            {/* Split */}
            <td className="p-4 text-sm">
              <div className="font-medium text-textnormal">You: {item.split.you}</div>
              <div className="text-xs text-textplaceholder">
                Lead Agent: {item.split.leadAgent}
              </div>
              <div className="text-xs text-textplaceholder">
                Sub-Agent: {item.split.subAgent}
              </div>
            </td>

            {/* Status */}
            <td className="p-4">
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </td>

            {/* Last Updated */}
            <td className="p-4 text-sm text-textnormal">{item.lastUpdated}</td>

            {/* Actions */}
            <td className="p-4">
              <Dropdown
                overlay={getMenu(item)}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Button
                  type="text"
                  icon={<MoreOutlined className="text-textnormal" />}
                />
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
