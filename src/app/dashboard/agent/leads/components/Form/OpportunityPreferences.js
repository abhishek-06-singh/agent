import { Form, Input, Select } from "antd";
import { ChevronDown } from "lucide-react";


const { Option } = Select;

export default function OpportunityPreferences() {
  const [form] = Form.useForm();

  return (
    <div className="py-2 px-4 rounded-xl border border-bordercolor shadow-md">
      <h1 className="text-md font-bold text-primary mb-4 mt-2">Opportunity Preferences</h1>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Property Type */}
          <Form.Item
            label={<span className="text-textheading font-semibold">Property Type*</span>}
            name="propertyType"
            className="text-textheading font-semibold"
            rules={[{ required: true, message: "Please select property type" }]}
          >
            <Select placeholder="Select Property Type"
             dropdownClassName="bg-input border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className=" h-12 [&_.ant-select-selector]:!bg-input [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}>

              <Option value="apartment">Apartment</Option>
              <Option value="house">House</Option>
              <Option value="villa">Villa</Option>
              <Option value="commercial">Commercial</Option>
            </Select>
          </Form.Item>

          {/* Preferred Location/Area */}
          <Form.Item
            label={<span className="text-textheading font-semibold">Preferred Location/Area*</span>}
            name="preferredLocation"
            className="text-textheading font-semibold"
          >
            <Input className="h-12 bg-input border border-bordercolor" placeholder="Enter Location/Area" />
          </Form.Item>

          {/* Budget Range (Min) */}
          <Form.Item
            label={
              <>{<span className="text-textheading font-semibold">
                Budget Range <span>*</span> <span style={{ fontSize: "12px" }}>(Min)</span></span>}
              </>
            }
            name="budgetMin"
            className="text-textheading font-semibold"
            rules={[{ required: true, message: "Please enter minimum budget" }]}
          >
            <Input className="h-12 bg-input border border-bordercolor" placeholder="Enter Amount" />

          </Form.Item>

          {/* Budget Range (Max) */}
          <Form.Item
            label={
              <>{<span className="text-textheading font-semibold">
                Budget Range <span>*</span> <span style={{ fontSize: "12px" }}>(Max)</span></span>}
              </>
            }
            name="budgetMax"
            className="text-textheading font-semibold"
            rules={[{ required: true, message: "Please enter maximum budget" }]}
          >
            <Input className="h-12 bg-input border border-bordercolor" placeholder="Enter Amount" />

          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
