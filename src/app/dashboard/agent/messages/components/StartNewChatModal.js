import { Modal, Radio, Button } from 'antd'
import { X } from 'lucide-react'
import { ConfigProvider } from 'antd';

const StartNewChatModal = ({ open, onCancel, onConfirm, chatType, setChatType }) => {
  return (
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
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null} 
      closeIcon={<X className="text-black" />}
      centered
      className="rounded-lg bg-cardbg"
      width={450}
    >
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-4">Start New Chat</h3>

        {/* Chat Type */}
        <div className="mb-4">
          <p className="mb-2 font-medium">Chat Type</p>
          <Radio.Group onChange={(e) => setChatType(e.target.value)} value={chatType}>
            <div className="flex flex-col gap-2">
              <Radio value="1:1">1:1 Chat</Radio>
              <Radio value="group">Group Chat</Radio>
            </div>
          </Radio.Group>
        </div>

        {/* Footer Buttons */}
        <div className="w-full flex justify-center gap-3 pt-4">
          <Button  type="default" onClick={onCancel} className="w-1/2 border py-5 border-bordercolor">
            Cancel
          </Button>
          <Button
           type="default"
            className="w-1/2  bg-buttonbg border border-bordercolor py-5 text-background hover:bg-black/80"
            onClick={onConfirm}
          >
            Start Chat
          </Button>
        </div>
      </div>
    </Modal>
    </ConfigProvider>
  )
}

export default StartNewChatModal
