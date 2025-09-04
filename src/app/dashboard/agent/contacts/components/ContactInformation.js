import React, { useState } from 'react';
import { Input, Select, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ChevronDown, X } from 'lucide-react';
import { Close } from '@mui/icons-material';

const { Option } = Select;

const ContactInformation = () => {
  const [tags, setTags] = useState(['VIP', 'Potential Customer']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const countryCodeSelector = (
    <Select
      defaultValue="US"
      className="w-20 h-[44px]"
      size="large"
    >
      <Option value="US">🇺🇸 +1</Option>
      <Option value="UK">🇬🇧 +44</Option>
      <Option value="CA">🇨🇦 +1</Option>
      <Option value="AU">🇦🇺 +61</Option>
    </Select>
  );

  return (
    <div className="bg-cardbg p-4 sm:p-4 rounded-lg shadow-md border border-bordercolor mt-[24px]">
      <h2 className="text-base sm:text-[18px] font-semibold text-textheading mb-4 ">
        Contact Information
      </h2>

      <div className="space-y-3">
        {/* Full Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-textnormal mb-2 no-label-marginbottom">
              Full Name*
            </label>
            <Input
              placeholder="Enter Full Name"
              size="large"
              className="w-full h-[44px] rounded-xl border border-bordercolor"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-textnormal mb-2 no-label-marginbottom">
              Email*
            </label>
            <Input
              placeholder="Enter Email"
              size="large"
              className="w-full h-[44px] rounded-xl border border-bordercolor"
              prefix={<span className="text-gray-400">📧</span>}
            />
          </div>
        </div>

        {/* Phone Number and Status Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-textnormal mb-2 no-label-marginbottom">
              Phone Number
            </label>
            <Input
              addonBefore={countryCodeSelector}
              placeholder="(555) 000-0000"
              size="large"
              className="w-full [&_.ant-input]:!h-[44px] rounded-xl [&_.ant-input-group]:!border [&_.ant-input-group]:!border-bordercolor [&_.ant-input-group]:!rounded-xl [&_.ant-input-group-addon]:!bg-cardbg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-textnormal mb-2 no-label-marginbottom">
              Status
              <span className="text-subtext text-xs ml-1">(optional)</span>
            </label>
            <Select
              placeholder="Enter Company Name"
              size="large"
              dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              className="w-full [&_.ant-select-selector]:!h-[44px] [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              suffixIcon={<span className="text-textnormal"><ChevronDown /></span>}
            >
              <Option value="lead">Lead</Option>
              <Option value="customer">Customer</Option>
              <Option value="prospect">Prospect</Option>
              <Option value="partner">Partner</Option>
            </Select>
          </div>
        </div>

        {/* Tags Section */}
        <div>
          <label className="block text-sm font-medium text-textnormal mb-2">
            Tags
          </label>
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <Tag
                  key={tag}
                  closable
                  onClose={() => handleClose(tag)}
                  className={`px-3 py-1 rounded-full text-sm bg-buttonbg text-background [&_.ant-tag-close-icon]:!text-background [&_.ant-tag-close-icon]:!hover:text-red-400`}
                                 >
                  {tag}
                </Tag>
              ))}
            </div>
            <Input
              type="text"
              size="small"
              className="h-[44px] w-full sm:w-3/4 md:w-1/2 rounded-xl border border-bordercolor"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
              autoFocus
              placeholder="Add Tags"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
