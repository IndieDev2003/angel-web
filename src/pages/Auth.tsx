import { useClerk } from "@clerk/react";
function Auth() {
  const clerk=useClerk();
  return (
    <div className="flex flex-col h-screen w-screen p-2 relative">
      {/* Background Image */}
      {/* <div className="h-screen w-screen fixed inset-0 z-1 ">
        <img
          src={backImg}
          className="object-cover w-full h-full"
          alt="Auth Background"
        />
      </div> */}

      {/* Upper  */}
      <div className="h-screen z-10 flex flex-col gap-2 items-center">
        <div className="h-8/10 border w-full "></div>
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
