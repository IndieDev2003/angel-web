import { useClerk } from "@clerk/react";
import { backgroundImg, logo } from "../assets";
function Auth() {
  const clerk = useClerk();
  return (
    <div className="flex flex-col h-screen w-screen p-2 relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-10 h-screen w-screen">
        <img src={backgroundImg} className="object-cover" alt="" />
      </div>

      {/* Upper  */}
      <div className="h-screen z-10 flex flex-col gap-2 items-center">
        <div className="h-8/10  w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center bg-pink-200/40 backdrop-blur-md p-5 rounded-xl">
            <img src={logo} className="size-32 rounded-2xl" alt="" />
            <p className="text-slate-900 text-xl">Angel</p>
          </div>
        </div>
        {/* Auth Buttons */}
        <div className="buttons w-full flex flex-col gap-2">
          <button
            onClick={() => clerk.openSignUp({})}
            className="w-full text-center text-lg text-white py-2 border rounded-3xl backdrop-blur-xl bg-pink-500/30 border-white/40"
          >
            Register
          </button>
          <button
            onClick={() => clerk.openSignIn({})}
            className="w-full text-center text-lg text-white py-2 border rounded-3xl backdrop-blur-xl bg-blue-400/50 border-white/40"
          >
            Login
          </button>
        </div>
        {/* Bottom */}
        <p className="text-center text-lg my-2 text-white py-1 rounded-full px-4 backdrop-blur w-fit">
          Made with <span className="text-red-500">❤</span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
