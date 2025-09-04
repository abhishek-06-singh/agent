
import React from "react";

const CheckboxWithLabel = ({ checked, setChecked, label }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-4 h-4 border border-bordercolor rounded"
      />
      <span className="text-sm text-textnormal">{label}</span>
    </div>
  );
};

export default CheckboxWithLabel;
