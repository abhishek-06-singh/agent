import { Modal, Button, Checkbox, Tag } from "antd";
import SendDocumentPage from "./SendDocumentPage";
import { ConfigProvider } from "antd";

export default function SendDocumentsModal({ open, setOpen }) {
  const handleCancel = () => {
    setOpen(false); 
  };
  
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#EEB887",  // main button & highlight color
          colorText: "#000000",     // default text
          colorTextActive: "#EEB887", // active text
        },
      }}
    >
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      width={750}
      centered
      className="rounded-lg bg-cardbg "
    >
      <SendDocumentPage handleCancel={handleCancel} h/>

    </Modal>
    </ConfigProvider>
  );
}
