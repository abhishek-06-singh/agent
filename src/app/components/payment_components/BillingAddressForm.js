// BillingAddressForm.jsx
import React from "react";

const BillingAddressForm = ({
  fullName,
  setFullName,
  address,
  setAddress,
  city,
  setCity,
  zip,
  setZip,
}) => {
  return (
    <div>
      <p className="text-xs text-subtext font-medium mb-3">BILLING ADDRESS</p>

      <div className="mb-4">
        <label className="block text-sm md:text-base text-textnormal mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm md:text-base text-textnormal mb-1">
          Address Line 1
        </label>
        <input
          type="text"
          placeholder="Address Line 1"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm md:text-base text-textnormal mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
          />
        </div>

        <div>
          <label className="block text-sm md:text-base text-textnormal mb-1">
            State/Province
          </label>
          <input
            type="text"
            placeholder="Zip Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingAddressForm;
