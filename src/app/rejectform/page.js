import SignupHeader from '../components/Auth/Shared_AuthComponents/SignupHeader'
import SignupFooter from '../components/Auth/Shared_AuthComponents/SignupFooter'
import RejectForm from '../components/Auth/Review&Approval(Rejected)/RejectForm'

export default function rejectform() {
  return (
    <div className=" min-h-screen w-full bg-background  flex flex-col">
      <SignupHeader />

      <RejectForm />

      <SignupFooter />
    </div>
  )
}
