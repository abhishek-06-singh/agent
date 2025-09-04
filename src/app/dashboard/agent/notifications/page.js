import Heading from "../../components/minicomponents/Heading"
import Navbar from "../../components/minicomponents/Navbar"
import NotificationsTabs from "./components/NotificationsTabs"

export default function NotificationsPage() {
  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Notifications" subtitle={'Stay updated on new leads, contract changes, and messages'}/>
              </div>

              <div className="mt-4">
              <NotificationsTabs/>
              </div>
              </div>
              
  )
}
