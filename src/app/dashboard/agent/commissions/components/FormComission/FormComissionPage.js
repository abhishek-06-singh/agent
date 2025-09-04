import { Form, ConfigProvider } from "antd";
import ComissionBreakdown from "./ComissionBreakdown"
import OptionalNotes from "./OptionalNotes"
import PropertyInformation from "./PropertyInformation"
import ContactAssociation from "./ContactAssociation"
import DealDetails from "./DealDetails"

export default function FormComissionPage({form}) {
  return (
    <div className='w-full px-10 space-y-6'>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887',
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
        <PropertyInformation/>
        <ContactAssociation/>
        <DealDetails/>
        <ComissionBreakdown/>
        <OptionalNotes/>
   </ConfigProvider>
   </div>
  )
}