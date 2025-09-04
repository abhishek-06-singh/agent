// CreditCardForm.jsx
import React from "react";
import { Eye } from "lucide-react"; // Make sure you have lucide-react installed

const CreditCardForm = ({
  cardNumber,
  setCardNumber,
  nameOnCard,
  setNameOnCard,
  expiry,
  setExpiry,
  cvv,
  setCvv,
}) => {
  return (
    <div>
      {/* Card Number */}
      <div className="relative mb-4">
        <label className="block text-sm md:text-base text-textnormal mb-1">
          Card Number
        </label>
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full px-4 py-2 pr-10 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
        />
        <Eye className="absolute right-3 bottom-3 text-textplaceholder w-5 h-5" />
      </div>

      {/* Name, Expiry, CVV */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm md:text-base text-textnormal mb-1">
            Name on Card
          </label>
          <input
            type="text"
            placeholder="Name on Card"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
          />
        </div>

        <div>
          <label className="block text-sm md:text-base text-textnormal mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
          />
        </div>

        <div>
          <label className="block text-sm md:text-base text-textnormal mb-1">
            CVV
          </label>
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full px-4 py-2 border border-bordercolor rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-textplaceholder"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
