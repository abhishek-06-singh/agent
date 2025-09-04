import { Upload } from 'lucide-react'
import Heading from '../../../components/minicomponents/Heading'
import UploadPage from './UploadPage'


export default function UploadDocument() {
  return (
   <>
   <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Add New Document" subtitle="Upload new documents, request signatures, and organize your files." />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                   Cancel
                  </button>
                  <button
                    className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                     Save Contact
                  </button>
                </div>
              </div>
              <div className="my-4">
               <UploadPage/>
              
              </div>
   </>
  )
}