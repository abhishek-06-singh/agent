'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import CommissionsTabs from './components/CommissionsTabs'
import FormComissionPage from './components/FormComission/FormComissionPage'
import { Form } from 'antd';
import { useCommission } from '../../../../../context/CommissionContext';
import { useRouter } from 'next/navigation';



export default function CommissionsPage() {
  const [showNewCommissions, setShowNewCommissions] = useState(false)
  const [open, setOpen] = useState(false)
  const [Commissions, setCommissions] = useState(false)
  
   const [form] = Form.useForm();
  const { setCommissionData } = useCommission();
  const router = useRouter();

  const handleSave = async () => {
    try {
      const values = await form.validateFields(); // Get form values
      setCommissionData(values); // Save to context
      router.push('/dashboard/agent/commissions/update'); // Navigate to update page
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {Commissions ? (
       <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewCommissions ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Commissions" subtitle={'Your personal contact database to track, segment, and engage your clients'} />
                <button
                  onClick={() => setShowNewCommissions(true)} 
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> Add New Commissions
                </button>
              </div>

              <div className="mt-4">
              <CommissionsTabs/>
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Commissions)
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Add New Commissions" />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Cancel
                  </button>
                  <button
                    className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={handleSave}
                  >
                    Save Commission
                  </button>
                </div>
              </div>
              <div className="my-4">
                <FormComissionPage form={form}/>
              </div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      {/* <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyListings}
      /> */}
     
    </div>
  )
}
