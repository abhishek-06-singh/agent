'use client'

export default function Heading({ title, subtitle, className = '' }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Heading */}
      <h1 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold leading-[100%] tracking-[-0.02em] font-montserrat text-textheading">
        {title}
      </h1>

      {/* Optional Subheading */}
      {subtitle && (
        <p className="lg:text-[14px] md:text-[12px] text-[10px]  leading-[140%] tracking-[-0.02em] font-montserrat mt-1 text-textnormal">
          {subtitle}
        </p>
      )}
    </div>
  )
}
