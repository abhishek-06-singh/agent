import LeftColumn_Contact from './LeftColumn_Contact'
import RightColumn_contact from './RightColumn_contact'
import Heading from '../../../../components/minicomponents/Heading'
import { Edit, Trash } from 'lucide-react'

export default function ContactDetailsPage({contact}) {

    return (<>
     <div className="ml-10 my-[28px] h-10 flex pr-10 justify-between">
                    <Heading title="Leads Details" />
    
                    <div className="flex gap-4">
                      <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                        <Edit className="w-4 h-4" />
                        Edit Lead
                      </button>
                      <button className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       <Trash className="w-4 h-4" /> 
                       Delete Lead    
                      </button>
                    </div>
                  </div>
        <div className='px-10 pb-10 gap-6 flex flex-col lg:flex-row'>
            <LeftColumn_Contact contact={contact} />
            <RightColumn_contact />
        </div>
        </>
    )
}