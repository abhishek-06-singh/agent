import { FaIdBadge, FaIdCard, FaHome } from "react-icons/fa";
import React from "react";

const documents = [
  { icon: <FaIdBadge className="text-text-primary" />, name: "Professional License", time: "Submitted 2 hours ago" },
  { icon: <FaIdCard className="text-text-primary" />, name: "Government ID", time: "Submitted 2 hours ago" },
  { icon: <FaHome className="text-text-primary" />, name: "Proof of Address", time: "Submitted 2 hours ago" },
];

export default function SubmittedDocuments() {
  return (
    <div className="w-full max-w-xl md:max-w-2xl mx-auto my-6 space-y-4">
      <h2 className="text-md md:text-lg  text-textheading">Submitted Documents</h2>

      {documents.map((doc, idx) => (
        <div
          key={idx}
          className="flex sm:items-center leading-relaxed flex-col sm:flex-row bg-cardbg  sm:justify-between py-1.5 px-2 md:px-6 sm:py-4 rounded-xl border border-bordercolor"

        >
          <div className="flex items-center  space-x-1 md:space-x-2">
            {doc.icon}
            <span className="text-xs md:text-sm text-textheading">{doc.name}</span>
          </div>
          <span className="text-xs md:text-sm text-secondary-alt">{doc.time}</span>
        </div>
      ))}
    </div>
  );
}
