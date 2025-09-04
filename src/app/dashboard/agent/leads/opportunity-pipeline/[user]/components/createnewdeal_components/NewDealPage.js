import Heading from '../../../../../../components/minicomponents/Heading'
import NewDealCard from './NewDealCard'

export default function NewDealPage() { 
  return (
    <div className='w-full px-10 space-y-6'>
    <div className="ml-10 my-4 h-10 flex pr-10 justify-between">
                    <Heading title="Leads Details" />
    
                    <div className="flex gap-4">
                      <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                        Cancel
                      </button>
                      <button className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       Save & Send Documents
                      </button>
                        <button className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       Save Deal
                      </button>
                    </div>
                  </div>
            <NewDealCard/>

    </div>
  )
}