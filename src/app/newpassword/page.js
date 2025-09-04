import BackToHomeLink from '../components/Shared/BackToHomeLink'
import SecurityNotice from '../components/Auth/SignIn/SecurityNotice'
import LeftPanel from '../components/Shared/LeftPanel'
import CreatePasswordHeading from '../components/Auth/ResetPassword/CreatePasswordHeading'
import CreatePassword from '../components/Auth/ResetPassword/CreatePassword'
import CreatePasswordButton from '../components/Auth/ResetPassword/CreatePasswordButton'

export default function NewPassword () {

  return (
    <div className="h-screen flex w-full">
      <LeftPanel />

      <div className="relative lg:w-7/12 md:w-full w-full flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-xl  space-y-8">
          {/* Link with fade-in from top */}

          <BackToHomeLink />

          {/* Sign-in Card with slide-up and fade-in */}

          {/* Heading - zoom-in */}
          <CreatePasswordHeading />

          {/* Form - fade in with slight delay */}
          <CreatePassword />
          <div className="text-textnormal text-xs">
            Must be at least 8 characters, include a number and a symbol.
          </div>
          {/* Sign-up link - fade in from below */}
          <CreatePasswordButton />

          {/* Security Notice - slow fade */}

          <SecurityNotice />
        </div>
      </div>
    </div>
  )
}
