'use client';

import { useCommission } from '../../../../../../context/CommissionContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button } from 'antd';
import PropertyInformation from '../components/FormComission/PropertyInformation';
import ContactAssociation from '../components/FormComission/ContactAssociation';
import DealDetails from '../components/FormComission/DealDetails';
import ComissionBreakdown from '../components/FormComission/ComissionBreakdown';
import OptionalNotes from '../components/FormComission/OptionalNotes';
import {ConfigProvider} from 'antd';

export default function UpdateCommissionPage() {
  const [form] = Form.useForm();
  const { commissionData } = useCommission();
  const router = useRouter();

  useEffect(() => {
    if (!commissionData) {
      router.push('/dashboard/agent/commissions');
    } else {
      form.setFieldsValue(commissionData);
    }
  }, [commissionData]);

  if (!commissionData) return null;

  const handleUpdate = (values) => {
    console.log('Updated:', values);
  };

  return (
    <div className="p-10 bg-cardbg rounded-xl shadow max-w-screen-xl mx-auto">
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
      <h2 className="text-xl font-semibold mb-6">Update Commission</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdate}
        initialValues={commissionData}
          className="update-commission-form space-y-6" 
      >
        <PropertyInformation />
        <ContactAssociation />
        <DealDetails />
        <ComissionBreakdown />
        <OptionalNotes />

        <div className="flex justify-end mt-6">
          <Button type="primary" htmlType="submit">
            Update Commission
          </Button>
        </div>
      </Form>
      </ConfigProvider>
    </div>
  );
}
