import ContactDetailsCard from './ContactDetailsCard'
import DealOpportunity from './DealOpportunity'
import { ConfigProvider } from 'antd';

export default function LeftColumn_Contact({ contact }) {
  return (
  <div className="w-full lg:w-8/12 flex flex-col items-start space-y-6 ">
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
      <ContactDetailsCard contact={contact} />
      <DealOpportunity />
      </ConfigProvider>
    </div>
  )
}