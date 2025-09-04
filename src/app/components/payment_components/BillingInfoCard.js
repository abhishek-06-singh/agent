// BillingInfoCard.jsx
import React from "react";

const BillingInfoCard = ({ billingCycle, nextBillingDate }) => {
  return (
    <div className="bg-orange-200 rounded-md p-3 mt-4 text-sm md:text-base flex justify-between">

      <div>
        <p className="text-black-500 font-medium mb-2">Billing Cycle</p>
        <p className="text-black-400">{billingCycle}</p>
      </div>
      <div className="text-right">
        <p className="text-black-500 font-medium mb-2">Next billing date</p>
        <p className="text-black-400">{nextBillingDate}</p>
      </div>
    </div>
  );
};

export default BillingInfoCard;
