'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SidebarLink({ href, label, icon, active }) {
  const pathname = usePathname()
  // if active is passed, use that, otherwise compute default
  const isActive =
    typeof active !== 'undefined'
      ? active
      : pathname === href || pathname.startsWith(href + '/')

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-3 rounded-md transition
        ${
          isActive
            ? 'bg-gradient-to-r from-[#EDB887] to-transparent text-textnormal text-[16px]'
            : 'hover:text-textnormal text-[16px]'
        }`}
    >
      {icon && <span className="text-sm">{icon}</span>}
      <span>{label}</span>
    </Link>
  )
}
