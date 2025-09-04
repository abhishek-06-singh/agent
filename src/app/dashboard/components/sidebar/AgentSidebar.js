'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

// MUI Icons (safe now because client component)
import DashboardIcon from '@mui/icons-material/Dashboard'
import ListAltIcon from '@mui/icons-material/ListAlt'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import ContactsIcon from '@mui/icons-material/Contacts'
import PaidIcon from '@mui/icons-material/Paid'
import DescriptionIcon from '@mui/icons-material/Description'
import MessageIcon from '@mui/icons-material/Message'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import BarChartIcon from '@mui/icons-material/BarChart'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'

// Sidebar components
import SidebarLink from './SidebarLink'
import SidebarParent from './SidebarParent'

export default function AgentSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState({
    leads: false,
    deals: false,
    subscription: false,
  })
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const toggleMenu = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isActive = (href) => pathname === href

  return (
    <>
      <AnimatePresence>
        {sidebarVisible && (
          <motion.aside
            className="w-72 h-screen overflow-y-auto bg-backgroundColor text-textnormal border-r p-4 relative"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarVisible(false)}
            >
              <MenuOpenIcon />
            </button>

            <h2 className="text-lg font-bold mb-6">Agent Panel</h2>

            <nav className="space-y-2">
              <SidebarLink
                href="/dashboard/agent"
                label="Dashboard"
                icon={<DashboardIcon />}
                active={isActive('/dashboard/agent')}
              />
              <SidebarLink
                href="/dashboard/agent/listings"
                label="Listings"
                icon={<ListAltIcon />}
                active={isActive('/dashboard/agent/listings')}
              />
              <SidebarLink
                href="/dashboard/agent/team"
                label="Team"
                icon={<GroupIcon />}
                active={isActive('/dashboard/agent/team')}
              />

              <SidebarParent
                label="Leads"
                icon={<PersonIcon />}
                open={open.leads}
                onClick={() => toggleMenu('leads')}
              >
                <SidebarLink
                  href="/dashboard/agent/leads/opportunity-pipeline"
                  label="Opportunity Pipeline"
                  active={isActive('/dashboard/agent/leads/opportunity-pipeline')}
                />
              </SidebarParent>

              <SidebarParent
                label="Deals"
                icon={<LocalOfferIcon />}
                open={open.deals}
                onClick={() => toggleMenu('deals')}
              >
                <SidebarLink
                  href="/dashboard/agent/deals/deal-history"
                  label="Deal History"
                  active={isActive('/dashboard/agent/deals/deal-history')}
                />
              </SidebarParent>

              <SidebarLink
                href="/dashboard/agent/contacts"
                label="Contacts"
                icon={<ContactsIcon />}
                active={isActive('/dashboard/agent/contacts')}
              />
              <SidebarLink
                href="/dashboard/agent/commissions"
                label="Commissions"
                icon={<PaidIcon />}
                active={isActive('/dashboard/agent/commissions')}
              />
              <SidebarLink
                href="/dashboard/agent/documents"
                label="Documents"
                icon={<DescriptionIcon />}
                active={isActive('/dashboard/agent/documents')}
              />
              <SidebarLink
                href="/dashboard/agent/messages"
                label="Messages"
                icon={<MessageIcon />}
                active={isActive('/dashboard/agent/messages')}
              />

              <SidebarParent
                label="Subscription & Billing"
                icon={<WorkspacePremiumIcon />}
                open={open.subscription}
                onClick={() => toggleMenu('subscription')}
              >
                <SidebarLink
                  href="/dashboard/agent/subscription/upgrade-change-plan"
                  label="Upgrade / Change Plan"
                  active={isActive(
                    '/dashboard/agent/subscription/upgrade-change-plan'
                  )}
                />
                <SidebarLink
                  href="/dashboard/agent/subscription/billing-history"
                  label="Billing History"
                  active={isActive(
                    '/dashboard/agent/subscription/billing-history'
                  )}
                />
                <SidebarLink
                  href="/dashboard/agent/subscription/enterprise-enquiry"
                  label="Enterprise Enquiry"
                  active={isActive(
                    '/dashboard/agent/subscription/enterprise-enquiry'
                  )}
                />
              </SidebarParent>

              <SidebarLink
                href="/dashboard/agent/reports-analytics"
                label="Reports & Analytics"
                icon={<BarChartIcon />}
                active={isActive('/dashboard/agent/reports-analytics')}
              />
              <SidebarLink
                href="/dashboard/agent/settings"
                label="Settings"
                icon={<SettingsIcon />}
                active={isActive('/dashboard/agent/settings')}
              />
              <SidebarLink
                href="/dashboard/agent/help-center"
                label="Help Center"
                icon={<HelpOutlineIcon />}
                active={isActive('/dashboard/agent/help-center')}
              />
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {!sidebarVisible && (
        <button
          className="fixed top-4 left-4 z-50 bg-backgroundColor border rounded-full p-2 shadow"
          onClick={() => setSidebarVisible(true)}
        >
          <MenuIcon />
        </button>
      )}
    </>
  )
}
