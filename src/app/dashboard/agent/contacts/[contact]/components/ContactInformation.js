"use client";

import { Card } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

export default function ContactInformation() {
  return (
    <Card
      className="rounded-lg py-4 px-3 shadow-md border border-bordercolor w-full max-w-md mx-auto"
      bodyStyle={{ padding: "1.5rem" }}
    >
      {/* Header */}
      <p className="text-base font-semibold text-textheading mb-4">
        Contact Information
      </p>

      {/* Contact Details */}
      <div className="flex flex-col gap-3 text-sm sm:text-base text-textnormal">
        <div className="flex items-center gap-2">
          <PhoneOutlined className="text-gray-500" />
          <span>(555) 123-4567</span>
        </div>

        <div className="flex items-center gap-2">
          <MailOutlined className="text-gray-500" />
          <span>sarah@prestigerealty.com</span>
        </div>

        <div className="flex items-center gap-2">
          <EnvironmentOutlined className="text-gray-500" />
          <span>Austin, Texas</span>
        </div>
      </div>
    </Card>
  );
}
