import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';

export default function LeadsLineChart({ leadsData }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={leadsData}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        {/* Only show horizontal grid lines (Y-axis) */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DADADA" />

        {/* X-Axis: Hide line and ticks, keep labels */}
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'var(--color-textnormal)', fontSize: 12, }}
        />

        {/* Y-Axis: Show line + ticks, only 3 tick marks */}
        <YAxis
          ticks={[0, 50, 100, 150, 200]}
          axisLine={true}
          tickLine={false}
          tick={{ fill: 'var(--color-textnormal)', fontSize: 12 }}
        />

        {/* Tooltip styling */}
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '8px' }}
          cursor={{ stroke: '#E4A267', strokeWidth: 1 }}
        />

        {/* Straight lines, not curvy */}
        <Line
          type="linear"
          dataKey="value"
          stroke="#E4A267"
          strokeWidth={2}
          dot={{ fill: '#E4A267', r: 5 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
