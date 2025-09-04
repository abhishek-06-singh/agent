'use client'
import React, { useState } from "react";
import { Card, DatePicker, TimePicker, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Image from "next/image";
import clock_light from '../../../../components/icons/Lightmode_icons/leads-light/black_clock.svg'
import clock_dark from '../../../../components/icons/Darkmode_icons/leads-dark/white_clock.svg'




const { Text } = Typography;

const FollowUpContact = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleTimeChange = (value) => {
    setTime(value);
  };

  const formattedDateTime =
    date && time
      ? `Next follow-up on: ${dayjs(date).format("MMMM D, YYYY")} at ${dayjs(time).format("h:mm A")}`
      : null;

  return (
   
    <Card className="w-full rounded-lg shadow-sm border border-bordercolor px-4 py-3 bg-cardbg">
      {/* Title */}
      <h3 className="text-lg font-semibold text-textheading mb-4">Follow-up</h3>

      {/* Date Picker */}
      <div className="mb-4">
        <Text strong className="text-textheading">Next Follow-Up Date</Text>
        <DatePicker
          className="w-full mt-1 bg-input border border-bordercolor"
          onChange={handleDateChange}
          placeholder="Select Date"
        />
      </div>

      {/* Time Picker */}
      <div className="mb-4">
        <Text strong className="text-textheading">Time</Text>
        <TimePicker
          className="w-full mt-1 bg-input border border-bordercolor"
          onChange={handleTimeChange}
          placeholder="Select Time"
          format="h:mm A"
        />
      </div>

      {/* Display Follow-up */}
      {formattedDateTime && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
          <ClockCircleOutlined className="text-textnormal" />
          <Text className="text-textnormal">{formattedDateTime}</Text>
        </div>
      )}

      <div className="flex flex-row mt-5 gap-3 justify-start items-center px-2 bg-shadow rounded-lg">
        <Image className="w-4 h-4 block dark:hidden " src={clock_light} alt="clock" width={20} height={20} />
        <Image className="w-4 h-4 hidden dark:block" src={clock_dark} alt="clock" width={20} height={20} />
        <p className="my-2 text-textnormal">Next follow-up on: January 18, 2025 at 2:00 PM</p>

      </div>
    </Card>
  );
};

export default FollowUpContact;
