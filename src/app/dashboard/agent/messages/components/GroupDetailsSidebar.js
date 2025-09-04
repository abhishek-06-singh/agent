'use client';

import React, { useState } from 'react';
import { Switch, Button, Input } from 'antd';
import { MoreOutlined, FileTextOutlined, UserAddOutlined, DeleteOutlined, LogoutOutlined, EditOutlined } from '@ant-design/icons';

export default function GroupDetailsSidebar() {
  const [notificationsMuted, setNotificationsMuted] = useState(false);

  return (
    <div className=" w-full max-w-xs bg-cardbg p-4 shadow-sm flex flex-col gap-5">
      {/* Group Header */}
      <div>
        <h3 className="text-sm font-semibold text-textheading mb-1">Group Details</h3>
        <div className="flex items-center gap-3">
          <img
            src="/avatar.png"
            alt="Group Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-base text-black flex items-center gap-1">
            DownTown Team
            <EditOutlined className="text-textnormal text-sm cursor-pointer" />
          </span>
        </div>
      </div>

      {/* Participants */}
      <div>
        <h3 className="text-sm font-semibold text-textheading mb-2">Participants</h3>
        <div className="flex flex-col gap-3">
          {[
            { name: 'Michael Chen', role: 'Lead' },
            { name: 'Michael Chen', role: 'Agent' },
            { name: 'Michael Chen', role: 'Sub-Agent' },
          ].map((user, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/avatar.png"
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg- text-textnormal border border-bordercolor">
                  {user.role}
                </span>
              </div>
              <MoreOutlined className="cursor-pointer text-textnormal" />
            </div>
          ))}
        </div>
        <Button
          icon={<UserAddOutlined />}
          className="w-full mt-3 bg-buttonbg text-background border-none hover:bg-buttonbg"
        >
          Add Participant
        </Button>
      </div>

      {/* Shared Files */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold text-textheading">Shared Files</h3>
          <span className="text-xs text-textnormal cursor-pointer">View All</span>
        </div>
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-cardbg p-2 rounded-md mb-2"
          >
            <div className="flex items-center gap-2">
              <FileTextOutlined className="text-textnormal" />
              <span className="text-sm text-textnormal">Purchase Agreement</span>
            </div>
            <span className="text-xs text-textnormal">1 day ago</span>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-textnormal">Mute Group Notifications</span>
        <Switch
          checked={notificationsMuted}
          onChange={setNotificationsMuted}
        />
      </div>

      {/* Group Description */}
      <div>
        <h3 className="text-sm font-semibold text-textheading mb-1">Group Description</h3>
        <Input.TextArea
          placeholder="Enter Description here"
          rows={2}
          className="resize-none text-sm"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 mt-auto">
        <Button
          icon={<LogoutOutlined />}
          danger
          className="w-full border border-red-300 text-red-500 bg-cardbg hover:bg-red-50"
        >
          Leave Group
        </Button>
        <Button
          icon={<DeleteOutlined />}
          danger
          className="w-full border-none text-white bg-red-500 hover:bg-red-600"
        >
          Delete Group
        </Button>
      </div>
    </div>
  );
}
