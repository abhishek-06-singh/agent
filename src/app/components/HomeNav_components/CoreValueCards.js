import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import { Users, Lightbulb, Eye, Shield } from "lucide-react";
import small from '../../images/patternsmall.png'

const benefits = [
  {
    icon: <Users className="w-6 h-6 text-gray-800" />,
    title: "Customer First",
    description: "Built for the real-world challenges of agents and agencies.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-gray-800" />,
    title: "Innovation",
    description: "We evolve quickly to stay ahead in proptech.",
  },
  {
    icon: <Eye className="w-6 h-6 text-gray-800" />,
    title: "Transparency",
    description: "From workflows to commissions, everything is clear.",
  },
  {
    icon: <Shield className="w-6 h-6 text-gray-800" />,
    title: "Reliability",
    description: "High uptime, responsive support, and robust infrastructure.",
  },
];

export default function CoreValueCards() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-200/50"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Background pattern image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={small}
              alt="Grid Background"
              fill
              className="object-cover pointer-events-none"
            />
          </div>

          {/* Foreground content */}
          <div className="relative z-10">
            {/* Icon with gradient and border */}
            <div className="p-2 bg-coralborder rounded-xl flex items-center justify-center w-16 h-16  mb-8 ">
              <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EEB887_100%)] rounded-lg w-14 h-12 flex items-center justify-center">
                {benefit.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg mb-3 font-bold text-black-500">
              {benefit.title}
            </h3>

            {/* Description */}
            <p className="text-black-500 mb-3 text-sm">
              {benefit.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
