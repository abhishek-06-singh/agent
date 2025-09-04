'use client';

import { useState } from "react";
import { Input, Select, Button, Avatar } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function Commission_Deals() {
  const [rows, setRows] = useState([
    {
      name: "Michael Chen",
      role: "You",
      split: 60,
      amount: 9000,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Agent",
      split: 30,
      amount: 4000,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    { name: "", role: "", split: "", amount: "" }, // no avatar row
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    if (field === "split") {
      const totalAmount = 15000;
      updated[index].amount = ((value / 100) * totalAmount).toFixed(0);
    }
    setRows(updated);
  };

  const handleAddRow = () => {
    setRows([...rows, { name: "", role: "", split: "", amount: "" }]);
  };

  const handleDelete = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  const totalPercentage = rows.reduce(
    (sum, row) => sum + Number(row.split || 0),
    0
  );
  const totalAmount = rows.reduce(
    (sum, row) => sum + Number(row.amount || 0),
    0
  );

  return (
    <div className="bg-cardbg px-4 pt-4 pb-6 rounded-xl border border-bordercolor shadow-md w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Commission Distribution</h3>
        <div className="space-x-2">
          <Button type="default" icon={<PlusOutlined />}>
            Add New Contact
          </Button>
          <Button type="primary" onClick={handleAddRow}>+ Add Agent</Button>
        </div>
      </div>

      {/* Table */}
      <div className=" p-2">
        <table
          className="overflow-hidden w-full border border-gray-300 rounded-xl "
          style={{
            borderCollapse: "separate",
            borderSpacing: 0,
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr className="text-left border-b border-gray-300 bg-gray-100">
              <th className="p-3 w-[30%]">Name</th>
              <th className="p-3 w-[20%]">Role</th>
              <th className="p-3 w-[20%]">Split (%)</th>
              <th className="p-3 w-[20%]">Amount</th>
              <th className="p-3 w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    {row.avatar && (
                      <Avatar size={32} src={row.avatar} />
                    )}
                    <Select
                      placeholder="Search for Agent/Contact"
                      value={row.name || undefined}
                      onChange={(val) => handleChange(index, "name", val)}
                      className="w-full"
                    >
                      <Option value="Michael Chen">Michael Chen</Option>
                      <Option value="Sarah Johnson">Sarah Johnson</Option>
                    </Select>
                  </div>
                </td>
                <td className="p-3">
                  <Select
                    placeholder="Select Role"
                    value={row.role || undefined}
                    onChange={(val) => handleChange(index, "role", val)}
                    className="w-full"
                  >
                    <Option value="You">You</Option>
                    <Option value="Lead Agent">Lead Agent</Option>
                  </Select>
                </td>
                <td className="p-3">
                  <Input
                    type="number"
                    placeholder="Enter Commission"
                    value={row.split}
                    onChange={(e) =>
                      handleChange(index, "split", e.target.value)
                    }
                    className="w-full"
                  />
                </td>
                <td className="p-3">
                  <Input
                    placeholder="Enter Amount"
                    value={
                      row.amount
                        ? `$${Number(row.amount).toLocaleString()}`
                        : ""
                    }
                    readOnly
                    className="w-full"
                  />
                </td>
                <td className="p-3 text-center">
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(index)}
                    size="small"
                    style={{ padding: 0 }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer summary */}
      <div className="mt-4 p-2">
        <div className="flex justify-between mb-1">
          <span className="text-textnormal">Total Percentage</span>
          <span className="text-textnormal">{totalPercentage}%</span>
        </div>
        <div className="h-2 bg-shadow rounded-full mb-2">
          <div
            className="h-2 bg-buttonbg rounded-full"
            style={{ width: `${totalPercentage}%` }}
          />
        </div>
        <div className="flex text-textnormal justify-between font-semibold">
          <span>Total Amount</span>
          <span>${totalAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
