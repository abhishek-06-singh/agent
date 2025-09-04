'use client'

export default function Button({
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-1 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 text-xs  rounded-md font-medium transition-all duration-300 ease-in-out font-500
                  transform
                  ${
                    disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 active:scale-95 hover:shadow-sm'
                  }
                  ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
