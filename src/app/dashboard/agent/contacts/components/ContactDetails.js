import ContactInformation from "./ContactInformation";
import ProfileRole from "./ProfileRole";
import AdditionalInfo from "./AdditionalInfo";
import ContactPreview from "./ContactPreview";
import {ConfigProvider} from "antd";

const contactsData = [
  {
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "Active",
  },
  {
    name: "Sarah Lee",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "Inactive",
  },
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=7",
    status: "Active",
  },
];

export default function ContactDetails() {
  return (
    <div>
      <div className="px-10 w-full space-y-5">
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
        <ContactInformation/>
        <ProfileRole/>
        <AdditionalInfo/>
        <ContactPreview contacts={contactsData} />
        </ConfigProvider>
        
      </div>
    </div>
  )
}