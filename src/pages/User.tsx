import { UserProfile } from "@clerk/react"
import { dark } from "@clerk/ui/themes"

function User() {
  return (
    <div className="flex h-max w-screen p-0 text-2xl items-center justify-center">
        <UserProfile appearance={{
            theme:dark
        }}/>
    </div>
  )
}

export default User