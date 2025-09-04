import { Table, Button, Space, Tag, Card } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const Documents_SectionDeals = () => {
  const documents = [
    {
      key: "1",
      name: "Purchase Agreement.pdf",
      type: "Purchase Agreement",
      status: "Draft",
      sentDate: "Jan 10, 2025",
    },
    {
      key: "2",
      name: "Purchase Agreement.pdf",
      type: "Purchase Agreement",
      status: "Draft",
      sentDate: "Jan 10, 2025",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color="default" style={{ borderRadius: "12px", padding: "0 8px" }}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Sent Date",
      dataIndex: "sentDate",
      key: "sentDate",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Button
          type="text"
          icon={<MoreOutlined />}
          style={{ border: "none", boxShadow: "none" }}
        />
      ),
    },
  ];

  return (
    <Card
      title="Documents for Signature"
      className="p-4"
      extra={
        <Space>
          <Button>+ Add New Document</Button>
          <Button type="primary" style={{ background: "black", borderColor: "black" }}>
            Send For Signature
          </Button>
        </Space>
      }
      bordered={false}
      style={{ borderRadius: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
    >
      <Table
        columns={columns}
        dataSource={documents}
        pagination={false}
        bordered={false}
      />
    </Card>
  );
};

export default Documents_SectionDeals;
