'use client'
import { Dropdown, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

export default function MobileDealCard({ item, statusStyles, getMenu }) {
  return (
    <div
      key={item.id}
      className="p-4 rounded-xl border border-bordercolor bg-cardbg shadow-sm space-y-3"
    >
      {/* Property */}
      <div className="flex items-center gap-3">
        <img
          src={item.property.image}
          className="w-16 h-12 rounded-md object-cover"
          alt={item.property.name}
        />
        <div>
          <div className="font-medium text-sm">{item.property.name}</div>
          <div className="text-xs text-textplaceholder">
            {item.property.priceRange}
          </div>
        </div>
      </div>

      {/* Commission & Status */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{item.totalCommission}</div>
        <span
          className={`px-2 py-1 text-xs rounded-full font-medium ${statusStyles[item.status]}`}
        >
          {item.status}
        </span>
      </div>

      {/* Sub-Agent + Lead */}
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <img
            src={item.subAgent.avatar}
            className="w-7 h-7 rounded-full"
            alt={item.subAgent.name}
          />
          <div>
            <div>{item.subAgent.name}</div>
            <div className="text-xs text-textplaceholder">
              {item.subAgent.role}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={item.lead.avatar}
            className="w-7 h-7 rounded-full"
            alt={item.lead.name}
          />
          <div>{item.lead.name}</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <Dropdown
          overlay={getMenu(item)}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button
            type="text"
            icon={<MoreOutlined className="text-textnormal" />}
          />
        </Dropdown>
      </div>
    </div>
  )
}
