"use client";

import { Card, Avatar, Tag, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

export default function ContactCard({ contact }) {
  return (
    <Card
      className="rounded-2xl shadow-md border border-bordercolor py-6 px-4 w-full"
      bodyStyle={{ padding: "1rem" }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        {/* Left section: Avatar + Info */}
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <Avatar
            size={70}
            src="https://randomuser.me/api/portraits/women/44.jpg" // Example image URL
          />

          {/* Info */}
          <div className="flex flex-col space-y-1">
            <span className="text-xl font-bold text-textheading">
              {contact || "Sarah Johnson"}
            </span>
            <span className="text-sm text-textnormal">External Contact</span>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Tag className="bg-cardbg rounded-md px-2 py-0.5 text-textnormal font-medium border border-bordercolor">
                VIP
              </Tag>
              <Tag className="bg-cardbg rounded-md px-2 py-0.5 text-textnormal font-medium border border-bordercolor">
                Potential Collaborator
              </Tag>
            </div>

            {/* Last Interaction */}
            <span className="text-xs text-textnormal pt-2">
              Last Interaction :{" "}
              <span className="text-primary font-medium">
                Jan 12, 2020 at 2:30 PM
              </span>
            </span>
          </div>
        </div>

        {/* Right section: Button (aligned with name row) */}
        <div className="flex sm:items-start">
          <Button
            type="primary"
            icon={<MailOutlined className="text-background" />}
            className="bg-buttonbg rounded-xl flex items-center px-5 py-2 text-sm text-background"
          >
            Email
          </Button>
        </div>
      </div>
    </Card>
  );
}

