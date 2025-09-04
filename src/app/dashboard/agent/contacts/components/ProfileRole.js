import React, { useState } from 'react';
import { Upload, DatePicker, Button, message } from 'antd';
import { UploadOutlined, CalendarOutlined, CloudUploadOutlined } from '@ant-design/icons';

const ProfileRole = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const uploadButton = (
    <div className="flex flex-col items-center justify-center h-full">
      <CloudUploadOutlined className="text-4xl text-gray-400 mb-2" />
      <div className="text-gray-500 text-sm mb-2">
        Drag and drop your files here or
      </div>
      <Button 
        type="default" 
        className="bg-black text-white hover:bg-gray-800 border-black"
        size="small"
      >
        Browse Files
      </Button>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile & Role</h2>
      
      <div className="space-y-6">
        {/* Profile Image Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Profile Image
          </label>
          
          <div className="w-full">
            <Upload
              name="avatar"
              listType="picture-card"
              className="w-full"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleImageChange}
              style={{ width: '100%' }}
            >
              <div className="w-full h-32 sm:h-40 rounded-lg hover:border-gray-400 transition-colors duration-200">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="avatar" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  uploadButton
                )}
              </div>
            </Upload>
          </div>
        </div>

        {/* Start Date Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <DatePicker
              placeholder="Select Date"
              size="large"
              className="w-full"
              suffixIcon={<CalendarOutlined className="text-gray-400" />}
              onChange={handleDateChange}
              format="MM/DD/YYYY"
            />
          </div>
          {/* Empty space for responsive layout */}
          <div className="hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRole;