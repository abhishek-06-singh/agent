import React from "react";
import OrderSummary from "../components/payment_components/OrderSummary";
import PaymentMethod from "../components/payment_components/PaymentMethod";

export default function Payment() {
   
  return (
    <div className="min-h-screen w-full p-2 sm:p-5 md:p-10 ">

        <div className="pb-2 sm:pb-5 md:pb-10">

        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-1 ">Complete Your Payment</h1>
        <p className="text-base md:text-lg text-textnormal ">Secure payment powered by Stripe</p>
        </div>
        <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 p-2">
            <OrderSummary/>
        </div>
        <div className="w-full md:w-6/12 p-4">
            <PaymentMethod
                        />
        </div>
        </div>
      
    </div>
  );
}
