import { Form, ConfigProvider } from "antd";
import DealInformationForm from "./DealInformationForm"
import CommissionDistribution from "./CommissionDistribution"
import DocumentSection from "./DocumentSection"
import InternalNotes from "./InternalNotes"

export default function NewDealForm() {
  return (
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
    
    <DealInformationForm/>
    <CommissionDistribution/>
    <DocumentSection/>
    <InternalNotes/>
   </ConfigProvider>
  )
}