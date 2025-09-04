'use client';

import React from 'react';

const statusStyles = {
  Paid: ' text-green-500 border border-green-500',
  Pending: ' text-status-pending-in-review-500 border border-status-pending-in-review-500',
  Failed: ' text-red-600 border border-red-500',
};

const payments = [
  {
    date: 'Jan 15, 2025',
    description: 'Monthly Subscription – Individual Agent Plan',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    date: 'Dec 15, 2024',
    description: 'Monthly Subscription – Individual Agent Plan',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    date: 'Nov 15, 2024',
    description: 'Monthly Subscription – Individual Agent Plan',
    amount: '$49.00',
    status: 'Pending',
  },
  {
    date: 'Oct 15, 2024',
    description: 'Monthly Subscription – Individual Agent Plan',
    amount: '$49.00',
    status: 'Failed',
  },
];

export default function PaymentHistoryTable() {
  return (
    <div className="overflow-x-auto bg-cardbg rounded-lg border border-bordercolor">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-shadow text-textnormal font-medium">
          <tr>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-textnormal">
          {payments.map((payment, idx) => (
            <tr key={idx} className="border-t border-bordercolor">
              <td className="py-3 px-4 whitespace-nowrap">{payment.date}</td>
              <td className="py-3 px-4">{payment.description}</td>
              <td className="py-3 px-4">{payment.amount}</td>
              <td className="py-3 px-4">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${statusStyles[payment.status]}`}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
