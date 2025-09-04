import ContactInformation from "./ContactInformation";
import FollowUpContact from "./FollowUpContact";
import AdditionalDetails from "./AdditionalDetails";
import { ConfigProvider } from 'antd';


export default function RightColumn_contact() {
  return (    
    <div className="w-full lg:w-4/12 flex flex-col items-start space-y-6">
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
      <ContactInformation />
      <FollowUpContact />
      <AdditionalDetails />
      </ConfigProvider>
    </div>
  )
}