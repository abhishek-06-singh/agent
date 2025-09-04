import PropertySignatureForm from './PropertySignatureForm'
import NotesDescription from './NotesDescription'
import DocumentFormFields from './DocumentFormFields'
import DocumentUpload from './DocumentUpload'
import{ConfigProvider} from 'antd'
import QuickTips from './QuickTips'



export default function UploadPage () {
    return(
    <div className="w-full flex flex-col lg:flex-row  gap-6 px-10 py-6">
        <div className="w-full lg:w-8/12 flex flex-col items-start space-y-6 border border-bordercolor p-4 rounded-lg shadow-md">
             <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
         <DocumentFormFields/>
        <DocumentUpload/>
        <PropertySignatureForm/>     
        <NotesDescription/>
        </ConfigProvider>
        </div>
        <div className="w-full lg:w-4/12 flex flex-col items-start space-y-4">
        <QuickTips/>
    
        </div>
           </div>
           )
}