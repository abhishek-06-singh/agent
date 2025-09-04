'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SidebarLink from './SidebarLink'
import SidebarParent from './SidebarParent'
import ThemeIcon from './ThemeIcon'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import LogoSection from '../../../components/navbar/navbarComponents/LogoSection'
import { Drawer } from 'antd'
import { Menu } from 'lucide-react'

export default function SidebarWrapper() {
  const router = useRouter()
  const pathname = usePathname()

  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState({
    leads: false,
    deals: false,
    subscription: false,
  })

  const toggleMenu = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleLeadsClick = () => {
    router.push('/dashboard/agent/leads')
    toggleMenu('leads')
  }

  const handleDealsClick = () => {
    router.push('/dashboard/agent/deals')
    toggleMenu('deals')
  }

  const handleSubscriptionClick = () => {
    router.push('/dashboard/agent/subscription')
    toggleMenu('subscription')
  }

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsCollapsed(mobile)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-close sidebar on mobile navigation
  useEffect(() => {
    if (isMobile) {
      setSidebarVisible(false)
    }
  }, [pathname, isMobile])

  const sidebarContent = (
    <motion.div
      className={`h-full overflow-y-auto bg-backgroundColor text-textnormal p-4 relative
        ${isCollapsed ? 'w-[300px]' : 'w-[300px]'} transition-all duration-300`}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-6">
        <LogoSection />
        <button
          className="text-subtext hover:text-buttonbg ml-auto"
          onClick={() => setSidebarVisible(false)}
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-[18px] mt-8">
        <SidebarLink
          href="/dashboard/agent"
          label="Dashboard"
          icon={<ThemeIcon name="Dashboard" />}
          active={pathname === '/dashboard/agent'}
        />
        <SidebarLink
          href="/dashboard/agent/listings"
          label="Listings"
          icon={<ThemeIcon name="Listings" />}
          active={pathname.startsWith('/dashboard/agent/listings')}
        />
        <SidebarLink
          href="/dashboard/agent/team"
          label="Team"
          icon={<ThemeIcon name="Team" />}
          active={pathname.startsWith('/dashboard/agent/team')}
        />

        <SidebarParent
          label="Leads"
          icon={<ThemeIcon name="Leads" />}
          open={open.leads || pathname.includes('/leads')}
          onClick={handleLeadsClick}
          isCollapsed={isCollapsed}
        >
          <SidebarLink
            href="/dashboard/agent/leads/opportunity-pipeline"
            label="Opportunity Pipeline"
            active={pathname === '/dashboard/agent/leads/opportunity-pipeline'}
          />
        </SidebarParent>

        <SidebarParent
          label="Deals"
          icon={<ThemeIcon name="Deals" />}
          open={open.deals || pathname.includes('/deals')}
          onClick={handleDealsClick}
          isCollapsed={isCollapsed}
        >
          <SidebarLink
            href="/dashboard/agent/deals/deal-history"
            label="Deal History"
            active={pathname === '/dashboard/agent/deals/deal-history'}
          />
        </SidebarParent>

        <SidebarLink
          href="/dashboard/agent/contacts"
          label="Contacts"
          icon={<ThemeIcon name="Contacts" />}
          active={pathname.startsWith('/dashboard/agent/contacts')}
        />
        <SidebarLink
          href="/dashboard/agent/commissions"
          label="Commissions"
          icon={<ThemeIcon name="Commissions" />}
          active={pathname.startsWith('/dashboard/agent/commissions')}
        />
        <SidebarLink
          href="/dashboard/agent/documents"
          label="Documents"
          icon={<ThemeIcon name="Documents" />}
          active={pathname.startsWith('/dashboard/agent/documents')}
        />
        <SidebarLink
          href="/dashboard/agent/messages"
          label="Messages"
          icon={<ThemeIcon name="Messages" />}
          active={pathname.startsWith('/dashboard/agent/messages')}
        />

        <SidebarParent
          label="Subscription & Billing"
          icon={<ThemeIcon name="Subscription" />}
          open={open.subscription || pathname.includes('/subscription')}
          onClick={handleSubscriptionClick}
          isCollapsed={isCollapsed}
        >
          <SidebarLink
            href="/dashboard/agent/subscription/upgrade-change-plan"
            label="Upgrade / Change Plan"
            active={
              pathname === '/dashboard/agent/subscription/upgrade-change-plan'
            }
          />
          <SidebarLink
            href="/dashboard/agent/subscription/billing-history"
            label="Billing History"
            active={
              pathname === '/dashboard/agent/subscription/billing-history'
            }
          />
        </SidebarParent>

        <SidebarLink
          href="/dashboard/agent/reports-analytics"
          label="Reports & Analytics"
          icon={<ThemeIcon name="Reports" />}
          active={pathname.startsWith('/dashboard/agent/reports-analytics')}
        />
        <SidebarLink
          href="/dashboard/agent/settings"
          label="Settings"
          icon={<ThemeIcon name="Setting" />}
          active={pathname.startsWith('/dashboard/agent/settings')}
        />
        <SidebarLink
          href="/dashboard/agent/help-center"
          label="Help Center"
          icon={<ThemeIcon name="Help" />}
          active={pathname.startsWith('/dashboard/agent/help-center')}
        />
      </nav>
    </motion.div>
  )

  return (
    <>
      {isMobile ? (
        <Drawer
          open={sidebarVisible}
          placement="left"
          onClose={() => setSidebarVisible(false)}
          closable={false}
          width={300}
          bodyStyle={{ padding: 0, background: 'var(--backgroundColor)' }}
        >
          {sidebarContent}
        </Drawer>
      ) : (
        sidebarContent
      )}

      {/* Sidebar Toggle Button */}
      {!sidebarVisible && (
        <button
          className="fixed top-1 left-2 z-50 bg-background border rounded-full p-1 shadow"
          onClick={() => setSidebarVisible(true)}
        >
          <MenuIcon />
        </button>
      )}
    </>
  )
}
