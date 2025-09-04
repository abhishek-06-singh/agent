'use client'

import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
} from 'recharts'

export default function VisualAnalytics() {
  const leadsData = [
    { name: 'New', value: 45 },
    { name: 'Contacted', value: 45 },
    { name: 'Converted', value: 45 },
  ]

  const dealData = [
    { name: 'New', value: 33, color: '#000000' },
    { name: 'Negotiation', value: 33, color: '#FFFFFF' }, // amber shade
    { name: 'Closed', value: 19, color: '#eeb887' },
  ]

  return (
    <div className="w-full pr-10 mt-5 mb-10 bg-background rounded-2xl ">
      <h2 className="text-xl font-semibold mb-6 text-primary">
        Visual Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
        {/* Leads by Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="w-full lg:col-span-4 p-4 bg-cardbg border border-bordercolor rounded-xl shadow-sm"
        >
          <h3 className="text-md font-semibold px-1  mb-4 text-textnormal">
            Leads by Status
          </h3>
          <ResponsiveContainer
            width="100%"
            height={250}
            stroke="#FDF8F3"
            className={'bg-corallighter rounded-xl text-textnormal '}
          >
            <BarChart
              data={leadsData}
              barSize={50}
              className="text-xs text-textnormal pb-4"
              margin={{ bottom: 10 }}
            >
              {/* <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f3f4f6"
              /> */}
              <XAxis
                dataKey="name"
                axisLine={{ stroke: '#ccc' }}
                tickLine={false}
                tick={({ x, y, payload }) => {
                  const item = leadsData.find((d) => d.name === payload.value)
                  return (
                    <g transform={`translate(${x},${y})`}>
                      {/* Name */}
                      <text
                        dy={14}
                        textAnchor="middle"
                        className="fill-textnormal"
                      >
                        {payload.value}
                      </text>
                      {/* Value under name */}
                      <text
                        dy={28}
                        textAnchor="middle"
                        fontSize={12}
                        fontWeight="bold"
                        className="fill-textnormal"
                      >
                        ({item?.value})
                      </text>
                    </g>
                  )
                }}
              />
              {/* <YAxis axisLine={false} tickLine={false} /> */}
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar dataKey="value" fill="#EDB887" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Deal Stage Breakdown */}
        {/* Deal Stage Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="w-full lg:col-span-8 bg-cardbg border border-bordercolor rounded-xl shadow-sm p-4"
        >
          <h3 className="text-md font-semibold mb-4 text-textnormal">
            Deal Stage Breakdown
          </h3>

          <div className="flex items-center justify-between bg-corallighter rounded-xl p-4">
            {/* Chart */}
            <div className="w-[80%] flex justify-center hidden md:block lg:block">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={dealData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    cx="50%"
                    cy="50%"
                  >
                    {dealData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <g>
                              {/* Big background circle (outside fill) */}
                              <circle
                                cx={viewBox.cx}
                                cy={viewBox.cy}
                                r={70} // slightly bigger radius than white circle
                                className="fill-coral" // stroke color as fill
                              />

                              {/* White inner circle */}
                              <circle
                                cx={viewBox.cx}
                                cy={viewBox.cy}
                                r={50}
                                className="fill-background"
                              />

                              {/* Text */}
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy - 5}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="fill-textnormal"
                                style={{ fontSize: '14px' }}
                              >
                                Total
                              </text>
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy + 15}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="fill-primary"
                                style={{ fontSize: '20px', fontWeight: 'bold' }}
                              >
                                42
                              </text>
                            </g>
                          )
                        }
                        return null
                      }}
                    />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="w-full pl-6 flex flex-col gap-3">
              {dealData.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: d.color }}
                    ></span>
                    <span className="text-sm text-textnormal">{d.name}</span>
                  </div>
                  <span className="text-sm font-medium text-textnormal">
                    {d.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
