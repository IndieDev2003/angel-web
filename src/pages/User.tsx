import { useClerk, UserProfile } from "@clerk/react";
import { backgroundImg } from "../assets";

function User() {
  const clerk = useClerk();

  return (
    <div className="flex flex-col w-screen p-0 text-2xl items-center justify-center">
      {/* Background Image */}
      <div className="fixed inset-0 h-screen w-screen z-1">
        <img src={backgroundImg} className="" alt="" />
      </div>

      <div className="relative z-20">
        <UserProfile />
        <div className="px-4 py-2">
          <button className="px-8 py-2 w-full backdrop-blur-xs rounded-xl border-white/40 border text-white" onClick={() => clerk.signOut({})}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default User;
