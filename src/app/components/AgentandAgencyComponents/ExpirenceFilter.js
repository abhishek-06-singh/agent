'use client'
import React, { useState } from "react";
import CustomDropdown from "../utilis/CustomDropdown";

export default function ExpirenceFilter({ listing, listingperpage }) {
  const [open, setOpen] = useState(null);   // track which dropdown is open
  const [selectedExp, setSelectedExp] = useState(""); // selected option

  const experienceOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ];

  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="flex justify-between items-center gap-4">
        {/* Left Side Info */}
        <div className="hidden md:block text-textnormal">
          <p>
            Showing {listingperpage} of {listing.length} listings
          </p>
        </div>

        {/* Right Side Dropdown */}
        <div className="w-auto">
          <CustomDropdown
            selectedLabel={
              selectedExp
                ? `Sort by: ${experienceOptions.find(
                    (opt) => opt.value === selectedExp
                  )?.label}`
                : "Sort by: Experience Level"
            }
            isOpen={open === "exp"}
            toggleDropdown={() => setOpen(open === "exp" ? null : "exp")}
            dropdownKey="exp"
          >
            {experienceOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setSelectedExp(option.value);
                  setOpen(null); // close after selecting
                }}
                className={`cursor-pointer px-2 py-1 rounded text-sm hover:bg-buttonbg hover:text-background
                  ${
                    selectedExp === option.value
                      ? "bg-buttonbg text-background font-medium"
                      : ""
                  }
                `}
              >
                {option.label}
              </div>
            ))}
          </CustomDropdown>
        </div>
      </div>
    </div>
  );
}

