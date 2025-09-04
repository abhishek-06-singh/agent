"use client";
import React from "react";
import { useState } from "react";
import CustomDropdown from "../utilis/CustomDropdown";
import { Search } from "lucide-react";

export default function TopBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
   const [specialty, setSpecialty] = useState('All');
   const [location, setLocation] = useState('');
  const [listedBy, setListedBy] = useState('Agents');

  const handleSearch = () => {
    console.log({ location, listedBy, specialty });
  };

  // Options
  const listedByOptions = ["Agents", "Owners", "Developers"];
  const specialtyOptions = ["All", "Residential", "Commercial", "Luxury"];

  return (
    <div className="max-w-7xl flex flex-col md:flex-row items-center py-4 gap-4 mx-auto">
      {/* Inputs Container */}
      <div className="w-full flex flex-col md:flex-row gap-4 items-center">
        {/* Location */}
        <div className="w-full md:w-1/2">
          <label className="block mb-1 text-sm  text-textnormal">
            Location
          </label>
          <div className="relative">
          <input
            type="text"
            placeholder="Enter Region or Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 truncate relative px-4 py-2 border border-bordercolor rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textplaceholder" />
          </div>
        </div>

        {/* Listed By */}
        <div className="w-full md:w-1/4">
          <CustomDropdown
            label="Listed By"
            selectedLabel={listedBy || "Select"}
            isOpen={openDropdown === "listedBy"}
            toggleDropdown={() =>
              setOpenDropdown(openDropdown === "listedBy" ? null : "listedBy")
            }
            dropdownKey="listedBy"
          >
            {listedByOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setListedBy(option);
                  setOpenDropdown(null); // close dropdown
                }}
                className={`cursor-pointer px-3 py-1 text-sm hover:bg-buttonbg hover:text-background rounded ${
                  listedBy === option
                    ? "bg-buttonbg text-background font-medium"
                    : ""
                }`}
              >
                {option}
              </div>
            ))}
          </CustomDropdown>
        </div>

        {/* Specialty */}
        <div className="w-full md:w-1/4">
          <CustomDropdown
            label="Specialty"
            selectedLabel={specialty || "Select"}
            isOpen={openDropdown === "specialty"}
            toggleDropdown={() =>
              setOpenDropdown(openDropdown === "specialty" ? null : "specialty")
            }
            dropdownKey="specialty"
          >
            {specialtyOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSpecialty(option);
                  setOpenDropdown(null); // close dropdown
                }}
                className={`cursor-pointer px-3 py-1 text-sm hover:bg-buttonbg hover:text-background rounded ${
                  specialty === option
                    ? "bg-buttonbg text-background font-medium"
                    : ""
                }`}
              >
                {option}
              </div>
            ))}
          </CustomDropdown>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={handleSearch}
            className="w-full md:w-auto px-6 py-2 bg-buttonbg text-background rounded-md transition mt-6"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
