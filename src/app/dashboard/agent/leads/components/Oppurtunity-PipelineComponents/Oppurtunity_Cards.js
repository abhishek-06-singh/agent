'use client'
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRouter } from "next/navigation";

const data = {
  New: [
    {
      id: 1,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "New",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      id: 2,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "New",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
     {
      id: 11,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "New",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
     {
      id: 12,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "New",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
  ],
  Negotiation: [
    {
      id: 3,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Negotiation",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
    {
      id: 4,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Negotiation",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
     {
      id: 9,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Negotiation",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
     {
      id: 10,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Negotiation",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
  ],
  Closed: [
    {
      id: 5,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Closed",
      avatar: "https://i.pravatar.cc/50?img=5",
    },
        {
      id: 6,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Closed",
      avatar: "https://i.pravatar.cc/50?img=5",
    },
        {
      id: 7,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Closed",
      avatar: "https://i.pravatar.cc/50?img=5",
    },
        {
      id: 8,
      name: "Sarah Smith",
      location: "Manhattan, NY",
      price: "$450,000",
      date: "Jan 15, 2025",
      status: "Closed",
      avatar: "https://i.pravatar.cc/50?img=5",
    },
  ],
};

const statusColors = {
  New: "bg-green-500 text-white",
  Negotiation: "bg-status-pending-in-review-500 text-white",
  Closed: "bg-gray-200 text-black-500",
};

function Card({ item }) { const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/agent/leads/opportunity-pipeline/${encodeURIComponent(item.name)}`);
  };
  return (
    <div
     onClick={handleClick}
     className="cursor-pointer bg-cardbg rounded-xl p-4 shadow-md hover:shadow-shadow border border-bordercolor flex flex-col gap-2">

      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="mb-2">
          <h3 className="font-semibold text-subheading">{item.name}</h3>
        </div>
      </div>
      <div className="flex flex-row gap-1 opacity-80">
        <MapPinIcon className="w-4 h-4 text-textnormal  fill-current" />
      <p className="text-sm text-textnormal mb-1">{item.location}</p>
      </div>
      <p className="text-lg font-bold text-subheading">{item.price}</p>
      <div className="flex justify-between items-center text-sm">
        <span
          className={`px-2 py-1 rounded-2xl font-medium ${statusColors[item.status]}`}
        >
          {item.status}
        </span>
        <span className="text-subtext">{item.date}</span>
      </div>
    </div>
  );
}

export default function Oppurtunity_Cards() {
  const [columns] = useState(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  p-4 border border-bordercolor mb-4 shadow-md bg-cardbg rounded-xl">

      {Object.keys(columns).map((column) => (
        <div
          key={column}
          className=" rounded-xl p-2  "
        >
          <h2 className="bg-cardbg font-semibold border rounded-lg border-bordercolor text-subheading p-3 flex justify-between items-center  mb-6">
            {column}
            <div className="w-6 h-6 flex items-center justify-center rounded-full  text-textnormal bg-important">
              {columns[column].length}
            </div>
          </h2>
          <div className="flex flex-col gap-3">
            {columns[column].map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
