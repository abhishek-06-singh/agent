"use client";
import { CheckCircleFilled } from "@ant-design/icons";
import { Card } from "antd";

const tips = [
  "You can send documents for e-signature after upload.",
  "Only PDF files are supported.",
  "Select a property first to filter relevant contacts.",
  "Assigned leads/contacts will be notified after upload.",
];

export default function QuickTips() {
  return (
    <Card
      className="
        w-full 
        rounded-2xl 
        shadow-sm 
        border 
        border-gray-200 
        bg-white 
        p-4 sm:p-6 
        text-gray-700
      "
      bodyStyle={{ padding: 0 }}
    >
      {/* Heading */}
      <h2 className="text-base sm:text-lg font-semibold mb-4">Quick Tips</h2>

      {/* Tips list */}
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <CheckCircleFilled className="text-green-500 text-lg sm:text-xl mt-0.5" />
            <span className="leading-snug">{tip}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
