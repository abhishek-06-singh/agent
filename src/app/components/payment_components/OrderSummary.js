import { Check } from "lucide-react";
import FeaturesList from "./FeaturesList";
import PlanHeader from "./PlanHeader";
import PriceSummary from "./PriceSummary";
import BillingInfoCard from "./BillingInfoCard";
import React from 'react'

export default function OrderSummary() {
  const planFeatures = [
  "1 user only",
  "Access to all features",
  "Unlimited property listings",
  "Limited external collaborators (2 at a time)",
];
  return (
    <div className="w-full mx-auto bg-cardbg rounded-2xl shadow p-6 border border-bordercolor">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-subheading mb-4">
        Order Summary
      </h2>

      {/* Plan Info */}
      <PlanHeader
      title="Pro Agent Plan"
      subtitle="Perfect for individual agents"
      price="$49/month"
      billing="Billed monthly"
    />

      {/* Features */}
      <FeaturesList features={planFeatures} />


      {/* Divider */}
      <hr className="my-4 border-bordercolor" />

      {/* Pricing */}
      <PriceSummary
      subtotal="$49.00" 
      tax="$4.90" 
      total="$53.90" 
    />

      {/* Billing Info */}
      <BillingInfoCard
      billingCycle="Monthly" 
      nextBillingDate="February 10, 2025" 
    />

      {/* Change Package */}
      <button className="mt-3 text-sm md:text-base px-3 py-2 rounded-lg text-textblack bg-orange-200 hover:underline-offset-2 hover:underline">

        Change package
      </button>
    </div>
  );
}
