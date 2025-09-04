import { Card, Input } from "antd";

const { TextArea } = Input;

const OptionalNotes = () => {
  return (
    <div className="bg-cardbg rounded-xl shadow-md">
    <Card
      className=" p-4"
      bordered={false}
    >
      <p className="text-lg mb-4 text-primary font-semibold">Optional Notes</p>
      <TextArea rows={4} placeholder="Enter here..." />
    </Card></div>
  );
};

export default OptionalNotes;
