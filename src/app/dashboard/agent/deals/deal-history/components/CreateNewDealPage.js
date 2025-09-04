import Commission_Deals from './Commission_Deals';
import Documents_SectionDeals from './Document_SectionDeals';
import InternalNotes_Deals from './InternalNotes_Deals';
import { ConfigProvider } from 'antd';


export default function CreateNewDealPage() {
  return (
    <div className='p-10 space-y-6'>
      <Commission_Deals />
        <Documents_SectionDeals />
        <InternalNotes_Deals />
    </div>
  );
}