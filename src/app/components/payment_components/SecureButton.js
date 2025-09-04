// SecureButton.jsx
import React from "react";
import { Lock } from "lucide-react"; // adjust if your icon import is different

const SecureButton = ({ text, amount, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full bg-buttonbg text-background py-3 rounded-lg font-medium hover:bg-orange-300 transition"
      >
        {text} - ${amount}
      </button>

      {/* Secure text */}
      <div className="flex justify-center items-center gap-1 text-xs text-subtext mt-4">
        <Lock className="w-3 h-3" />
        <span>Your payment is securely processed</span>
      </div>
    </div>
  );
};

export default SecureButton;
