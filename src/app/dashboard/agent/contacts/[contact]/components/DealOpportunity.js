"use client";

import { Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Handshake } from "lucide-react";

export default function DealOpportunity() {
  return (
    <Card
      className="rounded-xl shadow-md border border-bordercolor w-full p-4"
      bodyStyle={{ padding: "1.5rem" }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <p className="text-base font-semibold text-textheading">
          Deal & Opportunity
        </p>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-buttonbg text-background rounded-full px-4 py-2 flex items-center justify-center w-fit"
        >
          Create New Deal
        </Button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center text-center py-10">
        <div className="bg-orange-100 rounded-full p-4 flex items-center justify-center mb-4">
          <Handshake className="w-10 h-10 text-black" />
        </div>
        <p className="text-textnormal text-sm sm:text-base max-w-sm">
          No active deals. Create one to convert this contact into a lead.
        </p>
      </div>
    </Card>
  );
}
