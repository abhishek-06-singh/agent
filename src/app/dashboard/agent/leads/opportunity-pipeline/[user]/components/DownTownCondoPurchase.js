import React from 'react';
import { Card, Typography, div } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DowntownCondoPurchase = () => {
  return (
    <Card 
      className=" rounded-lg shadow-md"
      bodyStyle={{ padding: 0 }}
    >
      <div className="bg-cardbg p-4 rounded-lg ">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="m-0 text-lg font-semibold text-textheading">
              Downtown Condo Purchase
            </div>
          </div>
          <div 
            type="primary" 
            size="small"
            className="bg-status-pending-in-review-500 text-white text-primary flex items-center justify-center font-semibold rounded-xl text-xs h-6 px-3"
          >
           ● Negotiation

          </div>
        </div>

        {/* Deal Value and Expected Closing */}
        <div className="flex justify-between pr-[40%] pb-4 border-b border-bordercolor">
          <div>
            <Text className="text-xs text-subtext">Deal Value</Text>
            <div>
              <Text className="text-base font-semibold text-textnormal">$450,000</Text>
            </div>
          </div>
          <div className="text-center">
            <Text className="text-xs text-subtext">Expected Closing</Text>
            <div>
              <Text className="text-base font-semibold text-textnormal">Jan 15, 2025</Text>
            </div>
          </div>
        </div>

        {/* Commission Split Section */}
        <div>
          <div className="flex justify-between items-center py-4">
            <Text className="text-xs text-subtext">Commission Split</Text>
            <div 
              type="text" 
              size="small"
              className="text-textheading text-xs p-0 h-auto"
            >
             <EditOutlined /> Edit
            </div>
          </div>

          {/* Agent 1 */}
          <div className="flex justify-between items-center mb-3">
            <div className="text-left">
            <div>
              <Text className="text-sm font-semibold text-textnormal">John Smith</Text>
            </div>
             <div>
                <Text className="text-xs text-subtext"> Agent</Text>
              </div>
            </div>

            <div className="text-right">
              <Text className="text-sm font-semibold text-textnormal">70%</Text>
              <div>
                <Text className="text-xs text-subtext">$9,450</Text>
              </div>
            </div>
          </div>

          {/* Agent 2 */}
          <div className="flex justify-between items-center">
            <div className='text-left'>
            <div>
              <Text className="text-sm font-semibold text-textnormal">Lisa Chen</Text>
            </div>
             <div>
                <Text className="text-xs text-subtext">Sub-Agent</Text>
              </div>
              </div>


            <div className="text-right">
              <Text className="text-sm font-semibold text-textnormal">30%</Text>
              <div>
                <Text className="text-xs text-subtext">$4,500</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DowntownCondoPurchase;