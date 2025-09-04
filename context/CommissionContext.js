'use client';

import { createContext, useContext, useState } from 'react';

const CommissionContext = createContext();

export function CommissionProvider({ children }) {
  const [commissionData, setCommissionData] = useState(null);
  return (
    <CommissionContext.Provider value={{ commissionData, setCommissionData }}>
      {children}
    </CommissionContext.Provider>
  );
}

export const useCommission = () => useContext(CommissionContext);
