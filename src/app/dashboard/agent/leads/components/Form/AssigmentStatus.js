import { Form, Input, Select, Checkbox } from "antd";
import { ChevronDown } from "lucide-react";

const { Option } = Select;
const { TextArea } = Input;

export default function AssignmentStatus() {
  const [form] = Form.useForm();

  return (
    <div className="py-2 px-4 rounded-xl border border-bordercolor shadow-md">
      <h1 className="text-md font-bold text-primary mb-4 mt-2">Assignment & Status</h1>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        className="space-y-4 mb-4"
      >
        {/* Lead Status */}
        <Form.Item
          label={<span className="text-textheading font-semibold">Lead Status*</span>}
          name="leadStatus"
          className="text-textheading font-semibold"
          rules={[{ required: true, message: "Please select lead status" }]}
        >
          <Select
            placeholder="Select Lead Status"
            dropdownClassName="bg-input border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="h-12 [&_.ant-select-selector]:!bg-input [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="new">New</Option>
            <Option value="in_progress">In Progress</Option>
            <Option value="contacted">Contacted</Option>
            <Option value="converted">Converted</Option>
            <Option value="closed">Closed</Option>
          </Select>
        </Form.Item>

        {/* High Priority Checkbox */}
        <Form.Item name="highPriority" valuePropName="checked">
          <Checkbox className="text-textnormal">Mark as High Priority</Checkbox>
        </Form.Item>

        {/* Notes/Internal Comments */}
        <Form.Item
          label={<span className="text-textheading font-semibold">Notes/Internal Comments</span>}
          name="notes"
          className="text-textheading font-semibold"
        >
          <TextArea
            rows={4}
            placeholder="Enter here..."
            className="bg-input border border-bordercolor rounded-xl text-textnormal"
          />
        </Form.Item>

        {/* Tags */}
        <Form.Item
          label={<span className="text-textheading font-semibold">Tags</span>}
          name="tags"
          className="text-textheading font-semibold"
        >
          <Input
            placeholder="Enter tags separated by commas"
            className="h-12 bg-input border border-bordercolor rounded-xl text-textnormal"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
