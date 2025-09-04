import DashboardLight from '../icons/Lightmode_icons/dashboard/grid-light.svg?url'
import DashboardDark from '../icons/Darkmode_icons/dashboard_dark/grid-dark.svg?url'

import ListingsLight from '../icons/Lightmode_icons/dashboard/task-light.svg?url'
import ListingsDark from '../icons/Darkmode_icons/dashboard_dark/listing-dark.svg'


import TeamLight from '../icons/Lightmode_icons/dashboard/team-light.svg?url'
import TeamDark from '../icons/Darkmode_icons/dashboard_dark/team-dark.svg?url'    

import LeadsLight from '../icons/Lightmode_icons/dashboard/leads-light.svg?url'
import LeadsDark from '../icons/Darkmode_icons/dashboard_dark/leads-dark.svg?url'


import DealsLight from '../icons/Lightmode_icons/dashboard/Tag_empty-light.svg?url'
import DealsDark from '../icons/Darkmode_icons/dashboard_dark/tag-dark.svg?url'


import ContactsLight from '../icons/Lightmode_icons/dashboard/AddressBook-light.svg?url'
import ContactsDark from '../icons/Darkmode_icons/dashboard_dark/AddressBook-dark.svg?url'


import CommissionsLight from '../icons/Lightmode_icons/dashboard/commissions-light.svg?url'
import CommissionsDark from '../icons/Darkmode_icons/dashboard_dark/commissions-dark.svg?url'


import DocumentsLight from '../icons/Lightmode_icons/dashboard/documents-light.svg?url'
import DocumentsDark from '../icons/Darkmode_icons/dashboard_dark/documents-dark.svg?url'


import MessagesLight from '../icons/Lightmode_icons/dashboard/ChartBar-light.svg?url'
import MessagesDark from '../icons/Darkmode_icons/dashboard_dark/ChartBar-dark.svg?url'


import SubscriptionLight from '../icons/Lightmode_icons/dashboard/crown-light.svg?url'
import SubscriptionDark from '../icons/Darkmode_icons/dashboard_dark/crown-dark.svg?url'

import ReportsLight from '../icons/Lightmode_icons/dashboard/ChartBar-light.svg?url'
import ReportsDark from '../icons/Darkmode_icons/dashboard_dark/ChartBar-dark.svg?url'


import SettingLight from '../icons/Lightmode_icons/dashboard/setting-light.svg?url'
import SettingDark from '../icons/Darkmode_icons/dashboard_dark/setting-dark.svg?url'


import HelpLight from '../icons/Lightmode_icons/dashboard/question-light.svg?url'
import HelpDark from '../icons/Darkmode_icons/dashboard_dark/question-dark.svg?url'


export const getIcon = (name, theme) => {
  const icons = {
 Dashboard: {
      light: { src: DashboardLight },
      dark: { src: DashboardDark, width: 19, height: 19 },
    },
    Listings: {
      light: { src: ListingsLight },
      dark: { src: ListingsDark, width: 20, height: 20 },
    },
    Team: {
      light: { src: TeamLight },
      dark: { src: TeamDark, width: 24, height: 24 },
    },
    Leads: {
      light: { src: LeadsLight },
      dark: { src: LeadsDark, width: 20, height: 20 },
    },
    Deals: {
      light: { src: DealsLight },
      dark: { src: DealsDark, width: 21, height: 21 },
    },
    Contacts: {
      light: { src: ContactsLight },
      dark: { src: ContactsDark, width: 20, height: 20 },
    },
    Commissions: {
      light: { src: CommissionsLight },
      dark: { src: CommissionsDark, width: 22, height: 22 },
    },
    Documents: {
      light: { src: DocumentsLight },
      dark: { src: DocumentsDark, width: 20, height: 20 },
    },
    Messages: {
      light: { src: MessagesLight },
      dark: { src: MessagesDark, width: 20, height: 20 },
    },
    Subscription: {
      light: { src: SubscriptionLight },
      dark: { src: SubscriptionDark, width: 22, height: 22 },
    },
    Reports: {
      light: { src: ReportsLight },
      dark: { src: ReportsDark, width: 22, height: 22 },
    },
    Setting: {
      light: { src: SettingLight },
      dark: { src: SettingDark, width: 22, height: 22 },
    },
    Help: {
      light: { src: HelpLight },
      dark: { src: HelpDark, width: 22, height: 22 },
    },
  }

  return icons[name] ? icons[name][theme] : null
}