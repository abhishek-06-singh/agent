import { Form, ConfigProvider } from "antd";

import LeadDetails from "./LeadDetails";
import OpportunityPreferences from "./OpportunityPreferences";
import AssigmentStatus from "./AssigmentStatus";
import TrackingDocuments from "./TrackingDocuments";



export default function FormDetails(){
    const [form] = Form.useForm();

    return(
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
        <Form form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-6 p-8">
            <LeadDetails />
            <OpportunityPreferences />
            <AssigmentStatus />
            <TrackingDocuments />

        </Form>
        </ConfigProvider>
    )
}