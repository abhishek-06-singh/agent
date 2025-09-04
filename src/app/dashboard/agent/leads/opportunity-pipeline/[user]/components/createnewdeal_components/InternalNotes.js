import { Card, Input } from "antd";

const { TextArea } = Input;

const InternalNotes = () => {
  return (
    <Card
      title="Internal Notes"
      bordered={false}
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <TextArea rows={4} placeholder="Enter here..." />
    </Card>
  );
};

export default InternalNotes;
