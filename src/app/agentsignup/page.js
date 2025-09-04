import SignupHeader from '../components/Auth/Shared_AuthComponents/SignupHeader'
import SignupFooter from '../components/Auth/Shared_AuthComponents/SignupFooter'
import AgentSelectedForm from '../components/Auth/AgentSelected/AgentSelectedform'

export default function AgentSignup() {
  return (
    <div className=" min-h-screen w-full bg-background flex flex-col">
      <SignupHeader />

      <AgentSelectedForm />

      <SignupFooter />
    </div>
  )
}
