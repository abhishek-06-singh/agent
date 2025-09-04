'use client'
import React, { useState } from "react";
import { Map, Grid2X2 } from "lucide-react";
import CustomDropdown from "../utilis/CustomDropdown";

const ListingControls = ({
  onMapClick,
  MapActive,
  sortOptions = [],
  selectedSort,
  onSortChange,
  distanceOptions = [],
  selectedDistance,
  onDistanceChange,
}) => {
  const [open, set] = useState(null);

  return (
    <div className="w-full flex flex-col md:flex-row justify-end items-stretch gap-3 sm:gap-4">
      {/* Map Button */}
      <button
        onClick={onMapClick}
        className={`w-full md:w-auto whitespace-nowrap py-1 px-3 lg:py-2 border border-bordercolor rounded-md 
        text-xs md:text-sm ${
          MapActive
            ? "bg-buttonbg text-background"
            : "text-primary hover:bg-buttonbg hover:text-background"
        }`}
      >
        {MapActive ? (
          <span>
            <Grid2X2 className="w-4 h-4 lg:w-5 lg:h-5 inline-block mr-2" />
            Card View
          </span>
        ) : (
          <span>
            <Map className="w-4 h-4 lg:w-5 lg:h-5 inline-block mr-2" />
            View on Map
          </span>
        )}
      </button>

      {/* Dropdowns */}
      <div className="w-full md:w-auto flex flex-col md:flex-row gap-3 flex-1">
        {/* Sort Dropdown */}
        <CustomDropdown
          selectedLabel={
            selectedSort
              ? `Sort by : ${sortOptions.find((opt) => opt.value === selectedSort)?.label}`
              : "Sort"
          }
          isOpen={open === "sort"}
          toggleDropdown={() => set(open === "sort" ? null : "sort")}
          dropdownKey="sort"
        >
          {sortOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={`cursor-pointer px-2 py-1 rounded text-sm hover:bg-buttonbg hover:text-background ${
                selectedSort === option.value ? "bg-buttonbg text-background font-medium" : ""
              }`}
            >
              {option.label}
            </div>
          ))}
        </CustomDropdown>

        {/* Distance Dropdown */}
        <CustomDropdown
          selectedLabel={
            selectedDistance
              ? `Within ${distanceOptions.find((opt) => opt.value === selectedDistance)?.label}`
              : "Select Distance"
          }
          isOpen={open === "distance"}
          toggleDropdown={() => set(open === "distance" ? null : "distance")}
          dropdownKey="distance"
        >
          {distanceOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => onDistanceChange(option.value)}
              className={`cursor-pointer px-2 py-1 rounded text-sm hover:bg-buttonbg hover:text-background ${
                selectedDistance === option.value ? "bg-buttonbg text-background font-medium" : ""
              }`}
            >
              {option.label}
            </div>
          ))}
        </CustomDropdown>
      </div>
    </div>
  );
};

export default ListingControls;
