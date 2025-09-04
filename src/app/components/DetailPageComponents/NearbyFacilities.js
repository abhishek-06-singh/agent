// components/NearbyFacilities.jsx
import React from "react";
import {
  GraduationCap,
  Train,
  ShoppingCart,
  Hospital,
  TreePine,
  Dumbbell,
} from "lucide-react";

const facilities = [
  { icon: GraduationCap, name: "Central High School", distance: "0.3 mi", time: "3 min walk" },
  { icon: Train, name: "Metro Station", distance: "0.3 mi", time: "3 min walk" },
  { icon: ShoppingCart, name: "Grocery Store", distance: "0.5 mi", time: "3 min walk" },
  { icon: Hospital, name: "City Hospital", distance: "0.5 mi", time: "3 min walk" },
  { icon: TreePine, name: "Central Park", distance: "0.4 mi", time: "3 min walk" },
  { icon: Dumbbell, name: "Fitness Center", distance: "0.4 mi", time: "3 min walk" },
];

export default function NearbyFacilities() {
  return (
    <div className="space-y-4 mb-8">
      <h2 className="text-lg font-semibold text-textnormal">Nearby Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {facilities.map(({ icon: Icon, name, distance, time }, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border rounded-xl p-4 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-3">
              <Icon size={20} className="text-textnormal" />
              <div>
                <div className="font-medium text-textnormal">{name}</div>
                <div className="text-sm text-textnormal">{time}</div>
              </div>
            </div>
            <span className="text-sm text-textnormal">{distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
