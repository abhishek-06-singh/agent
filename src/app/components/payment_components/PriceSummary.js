// PriceSummary.jsx
import React from "react";

const PriceSummary = ({ subtotal, tax, total }) => {
  return (
    <div className="text-sm md:text-base space-y-2">

      <div className="flex justify-between">
        <span className="text-subtext">Subtotal</span>
        <span className="text-subheading font-medium">{subtotal}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-subtext">Tax</span>
        <span className="text-subheading font-medium">{tax}</span>
      </div>
      <div className="flex justify-between text-base font-semibold mb-10">
        <span className="text-subtext">Total</span>
        <span className="text-subheading">{total}</span>
      </div>
    </div>
  );
};

export default PriceSummary;
