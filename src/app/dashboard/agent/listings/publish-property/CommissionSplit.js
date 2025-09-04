import React, { useState } from 'react'
import { Table, Select, Input, Button, Avatar } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'

const { Option } = Select

export default function CommissionSplit() {
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: 'SilverOak',
      avatar: 'https://i.pravatar.cc/40?img=1',
      role: 'You',
      split: 60,
      amount: 9000,
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/40?img=2',
      role: 'Lead Agent',
      split: 30,
      amount: 4000,
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: 'https://i.pravatar.cc/40?img=3',
      role: 'Sub-Agent',
      split: 10,
      amount: 1000,
    },
  ])

  const handleRemoveAgent = (id) => {
    setAgents((prev) => prev.filter((a) => a.id !== id))
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Avatar src={record.avatar} size={32} />
          <span className="text-sm">{record.name}</span>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (_, record) => (
        <Select defaultValue={record.role} style={{ width: 160 }}>
          <Option value="You">You</Option>
          <Option value="Lead Agent">Lead Agent</Option>
          <Option value="Sub-Agent">Sub-Agent</Option>
        </Select>
      ),
    },
    {
      title: 'Split (%)',
      dataIndex: 'split',
      key: 'split',
      render: (split) => (
        <Input
          value={split}
          suffix="%"
          style={{ width: 120, textAlign: 'center' }}
        />
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (amount) => (
        <span className="text-sm">${amount.toLocaleString()}</span>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Button
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => handleRemoveAgent(record.id)}
        />
      ),
    },
  ]

  return (
    <div>
      <Table
        dataSource={agents}
        columns={columns}
        pagination={false}
        rowKey="id"
        bordered
      />
    </div>
  )
}
