import React from "react";
export default function MapEmbed({ lat = 40.7128, lng = -74.0060 }) {
  return (
    <div className="rounded-lg  mb-6">
        <h2 className="text-lg my-2 text-textnormal">Location</h2>

    <iframe
      width="100%"
      height="384"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/view?key=&center=${lat},${lng}&zoom=14`}
      className="bg-gray-500"
    ></iframe>
    </div>
  );
}
