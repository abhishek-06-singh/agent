import React from "react";

export default function TrialBar() {
  return (
    <div className="w-full bg-background border rounded-md shadow-sm p-4 flex flex-col md:flex-row items-center justify-between">


      {/* Left Section */}
      <div className="text-center md:text-left mb-3 md:mb-0">
        <h2 className="text-sm font-medium text-subheading">
          Start your free trial – <span className="font-semibold">Enjoy full access to explore the product now</span>
        </h2>
        <p className="text-xs text-textnormal">

          You can explore all features right away. Choose a plan anytime to continue after your trial ends.
        </p>
      </div>

      {/* Right Section (Button) */}
      <div>
        <button className="bg-buttonbg text-background px-5 py-2 rounded-md text-sm font-medium  transition">

          Start Free Trial
        </button>
      </div>
    </div>
  );
}
