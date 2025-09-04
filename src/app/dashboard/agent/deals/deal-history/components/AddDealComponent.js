import { Button, Dropdown, Menu } from "antd";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";

export default function AddDealComponent() {
  const members = [
    {
      id: 1,
      lead: {
        name: "Sarah Johnson",
        role: "Lead Agent",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      contact: {
        email: "sarah.johnson@email.com",
      },
    },
    {
      id: 2,
      lead: {
        name: "John Smith",
        role: "Sub-Agent",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      contact: {
        email: "john@silveroak.com",
      },
    },
  ];

  const getMenu = (member) => (
    <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg  [&_.ant-dropdown-menu-item:hover]:!text-background">
      <Menu.Item key="1" onClick={() => alert(`Edit ${member.lead.name}`)}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" onClick={() => alert(`Delete ${member.lead.name}`)}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <>
     <h2 className="text-lg mt-10 text-primary font-semibold">Recipients</h2>

   <div className="overflow-hidden rounded-xl shadow-md mt-4 border border-bordercolor">
  <table className="min-w-full text-left table-auto">
    <thead className="bg-cardbg text-textnormal text-xs border-b border-bordercolor">
      <tr>
        <th className="p-4">Name</th>
        <th className="p-4">Role</th>
        <th className="p-4">Email</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-bordercolor">
      {members.map((item) => (
        <tr key={item.id} className="hover:bg-boxbg transition">
          {/* Lead */}
          <td className="p-4">
            <div className="flex items-center gap-3 w-full">
              <img
                src={item.lead.avatar}
                className="w-9 h-9 rounded-full"
                alt={item.lead.name}
              />
              <div className="min-w-0">
                <div className="font-semibold text-textheading text-sm">{item.lead.name}</div>
              </div>
            </div>
          </td>

          {/* Role */}
          <td className="p-4">
            <div className="text-sm text-textnormal">{item.lead.role}</div>
          </td>

          {/* Email */}
          <td className="p-4">
            <div className="text-sm text-textnormal">{item.contact.email}</div>

          </td>

          {/* Actions */}
          <td className="p-4">
            <Dropdown
              overlay={getMenu(item)}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button
                type="text"
                icon={<MoreOutlined className="text-textnormal" />}
              />
            </Dropdown>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<Button
    icon={<PlusOutlined />}
    className="my-5 text-xs bg-background text-textnormal rounded-lg"
  >
    Add New Lead/Contract
  </Button>
</>
  )}