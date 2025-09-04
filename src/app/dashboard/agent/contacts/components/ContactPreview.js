import { Card, Avatar, Tag, Tooltip } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";

export default function ContactPreview({ contacts }) {
  const router = useRouter();

  const handleClick = (name) => {
    router.push(`/dashboard/agent/contacts/${encodeURIComponent(name)}`);
  };

  return (
    <div className="w-full border border-bordercolor rounded-xl shadow-md p-4">
      <p className="text-lg text-textheading font-semibold mb-6">
        Contact Preview
      </p>

      {/* Make cards sit next to each other */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact, index) => (
          <Card key={index} className="w-full p-4 rounded-2xl shadow-md">
            <div
              onClick={() => handleClick(contact.name)}
              className="flex cursor-pointer items-center gap-4"
            >
              {/* Avatar */}
              <Avatar size={55} src={contact.avatar} />

              {/* Name + Status + Tools */}
              <div className="flex flex-1 flex-row justify-between items-center">
                {/* Name + Status */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{contact.name}</span>
                  <Tag
                    className={`w-fit mt-1 rounded-full text-white ${
                      contact.status === "Active"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {contact.status}
                  </Tag>
                </div>

                {/* Action Icons */}
                <div className="flex gap-3 text-xl">
                  <Tooltip title="Edit Contact">
                    <Edit className="cursor-pointer w-5 h-5 text-textnormal" />
                  </Tooltip>
                  <Tooltip title="Send Email">
                    <MailOutlined className="cursor-pointer text-textnormal" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
