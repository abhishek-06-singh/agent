// components/KeyFeatures.jsx
import React from "react";
import {
  Car,
  Waves,
  Wind,
  Shield,
  Shirt,
  Ruler,
  Trees,
  Wifi,
  Flame,
  Sofa,
  Home,
  Sun,
  Flower2,
  Key,
  Building,
} from "lucide-react";

export default function KeyFeatures({ property }) {
  // Map feature labels to icons
  const iconMap = {
    "Pet Friendly": Flower2,
    "Balcony with View": Building,
    "Private Garden": Trees,
    "Solar Panels": Sun,
    "Swimming Pool": Waves,
    "Parking Facility": Car,
    "Parking Spaces": Car,
    Pool: Waves,
    "Air Conditioning": Wind,
    "Gated Community": Shield,
    "Laundry Room": Shirt,
    "Walk-in Closet": Ruler,
    "Garden/Yard": Trees,
    "Internet Ready": Wifi,
    Fireplace: Flame,
    Furnished: Sofa,
  };

  return (
    <div className="space-y-4 p-4 rounded-lg mb-8">
      <h2 className="text-lg font-semibold text-textnormal">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {property.keyFeatures.map((feature, idx) => {
  let label = feature;
  let badge = null;

  if (typeof feature === "object" && feature !== null) {
    const key = Object.keys(feature)[0];
    label = key;
    badge = feature[key];
  }

  const Icon = iconMap[label] || Home;

  return (
    <div
      key={idx}
      className="flex justify-between items-center border rounded-lg p-3 hover:shadow-sm transition"
    >
      <div className="flex items-center gap-3">
        <Icon size={20} className="text-textnormal" />
        <span className="text-sm text-textnormal font-medium">{label}</span>
      </div>
      {badge && badge !== "Yes" && badge !== "No" && (
        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded">
          {badge}
        </span>
      )}
    </div>
  );
})}

      </div>
    </div>
  );
}
