import QuickStats from './QuickStats'
import RecentlySigned from './RecentlySinged'


export default function RightColumnDocument() {
  return (
    <div className="w-full lg:w-4/12 flex flex-col items-start space-y-6">
      <QuickStats />
      <RecentlySigned />
    </div>
  )
}