import YesterdayNotifications from "./YesterdayNotifications";
import NotificationList from "./NotificationList";

export default function AllNotifications() {
    return (
        <div className="p-6  space-y-4">
           <NotificationList/>
           <YesterdayNotifications/>
        </div>
    )
}