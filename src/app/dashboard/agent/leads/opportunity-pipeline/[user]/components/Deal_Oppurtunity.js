import { useRouter } from 'next/navigation'
import DownTownCondoPurchase from './DownTownCondoPurchase'
import { Plus } from 'lucide-react'

export default function Deal_Oppurtunity({ user }) {

  const router = useRouter()
 const handlenewDeal = () => {
    router.push(`/dashboard/agent/leads/opportunity-pipeline/${encodeURIComponent(user)}/create-new-deal`);
  }

  return (
    <div className="w-full flex flex-col space-y-4 p-4 border border-bordercolor rounded-lg  shadow-md">
      <div className="flex justify-between items-center py-4">
        <p className="text-lg text-textheading font-bold">
          Deals & Opportunity
        </p>
        <button
         onClick={handlenewDeal}
         className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
          <Plus className="w-4 h-4" /> Create New Deal
        </button>
      </div>

      <DownTownCondoPurchase />
      <DownTownCondoPurchase />
    </div>
  )
}
