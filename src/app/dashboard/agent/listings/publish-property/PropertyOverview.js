'use client'

import { Card, Row, Col, Tag, Button, Avatar, Table } from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Heading from '../../../components/minicomponents/Heading'
import { CheckCircle, Pencil, Eye, Archive } from 'lucide-react'

export default function PropertyOverview() {
  const data = [
    { date: 'Jan 1', views: 50 },
    { date: 'Jan 2', views: 70 },
    { date: 'Jan 3', views: 100 },
    { date: 'Jan 4', views: 90 },
    { date: 'Jan 5', views: 120 },
    { date: 'Jan 6', views: 160 },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => (
        <div className="flex items-center gap-2">
          <Avatar src="https://i.pravatar.cc/40" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) =>
        status === 'Active' ? (
          <Tag color="green">{status}</Tag>
        ) : (
          <Tag color="orange">{status}</Tag>
        ),
    },
    {
      title: 'Actions',
      render: () => <Button type="text">•••</Button>,
    },
  ]

  const collaborators = [
    { key: 1, name: 'Sarah Johnson', role: 'Editor', status: 'Active' },
    { key: 2, name: 'Sarah Johnson', role: 'Lawyer', status: 'Pending' },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-2  mb-4">
        <Heading title="Property Overview" />
        <div className="justify-end gap-2 ml-auto flex">
          {' '}
          <Button
            icon={<CheckCircle size={16} />}
            className="flex items-center gap-1 border rounded-lg px-3 py-1 hover:bg-gray-100"
          >
            Mark as Sold
          </Button>
          <Button
            icon={<Pencil size={16} />}
            className="flex items-center gap-1 border rounded-lg px-3 py-1 hover:bg-gray-100"
          >
            Edit Listing
          </Button>
          <Button
            icon={<Eye size={16} />}
            className="flex items-center gap-1 border rounded-lg px-3 py-1 hover:bg-gray-100"
          >
            Preview
          </Button>
          <Button
            icon={<Archive size={16} />}
            className="flex items-center gap-1 border rounded-lg px-3 py-1 hover:bg-gray-100"
          >
            Archive
          </Button>
        </div>
      </div>

      {/* Header */}
      <Card>
        <Row gutter={18}>
          <Col span={10}>
            <img
              src="https://picsum.photos/300/200"
              alt="property"
              className="rounded-lg w-full"
            />
            <div className="flex gap-2 mt-2 w-2/3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/100/70?random=${i}`}
                  alt="thumbnail"
                  className="rounded-md w-2/3"
                />
              ))}
            </div>
          </Col>

          <Col span={12}>
            <h2 className="text-2xl font-semibold">Modern Family Home</h2>
            <p className="text-textnormal">
              123 Oak Street, Beverly Hills, CA 90210
            </p>

            <div className="flex gap-2 mt-2">
              <Tag color="green">Active</Tag>
              <Tag>House</Tag>
            </div>

            <h1 className="text-3xl font-bold mt-4">$1,250,000</h1>
            <Row className="mt-4">
              <Col span={12}>
                <p>Bedrooms: 4</p>
                <p>Area: 2,500 sq ft</p>
                <p>Property ID: #PR-2025-001</p>
              </Col>
              <Col span={12}>
                <p>Bathrooms: 3</p>
                <p>Year Built: 2018</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* Property Stats */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">Property Statistics</h3>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <span className="text-textnormal font-semibold w-full ml-8 mb-2 ">
                Views Over Time
              </span>
              <ResponsiveContainer width="100%" height={250} className="mt-4">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#f97316"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <span className="text-textnormal w-full font-semibold ">
                Conversion Funnel
              </span>
              <div className="space-y-3 mt-5">
                <div className="bg-orange-200 p-3 rounded-lg flex justify-between">
                  <span>Leads</span>
                  <strong>60</strong>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg flex justify-between">
                  <span>Offers</span>
                  <strong>32</strong>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg flex justify-between">
                  <span>Conversions</span>
                  <strong>8</strong>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} className="mt-6 text-center">
          <Col span={6}>
            <Card className="rounded-lg shadow-md">
              <p className="text-xl font-semibold">1,218</p>
              <p className="text-textnormal">Total Views</p>
            </Card>
          </Col>

          <Col span={6}>
            <Card className="rounded-lg shadow-md">
              <p className="text-xl font-semibold">23</p>
              <p className="text-textnormal">Inquiries</p>
            </Card>
          </Col>

          <Col span={6}>
            <Card className="rounded-lg shadow-md">
              <p className="text-xl font-semibold">5</p>
              <p className="text-textnormal">Offers Made</p>
            </Card>
          </Col>

          <Col span={6}>
            <Card className="rounded-lg shadow-md">
              <p className="text-xl font-semibold">2 Days</p>
              <p className="text-textnormal">Days Updated</p>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Collaborators */}
      <Card
        title="Collaborators"
        extra={<Button>+ Invite Collaborator</Button>}
      >
        <Table
          columns={columns}
          dataSource={collaborators}
          pagination={false}
        />
      </Card>
    </div>
  )
}
