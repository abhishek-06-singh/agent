// components/Documents.jsx
import React from "react";
import { FileText } from "lucide-react";

const documents = [
  { name: "Floor Plans", type: "PDF", size: "2.4 MB" },
  { name: "Brochure", type: "PDF", size: "2.4 MB" },
  { name: "Legal Docs", type: "PDF", size: "2.4 MB" },
];

export default function Documents({property}) {
  return (
    <div className="space-y-4 mb-8">
      <h2 className="text-lg font-semibold text-textnormal">Documents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-sm transition cursor-pointer"
          >
            <FileText size={28} className="text-textnormal" />
            <div>
              <div className="font-medium text-textnormal">{doc.name}</div>
              <div className="text-sm text-textnormal">
                {doc.type} · {doc.size}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
