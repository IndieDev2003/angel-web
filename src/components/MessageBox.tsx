import { useEffect, useRef, useState } from "react";
import front_mob from "../assets/home_mob.mp4";
import home_desk from "../assets/home_desk.mp4";
import { Link } from "react-router-dom";

function MessageBox() {
  const deskVideoRef = useRef<HTMLVideoElement>(null);
  const mobVideoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videosLoaded, setVideosLoaded] = useState(0);

  useEffect(() => {
    const handleCanPlay = () => {
      setVideosLoaded((prev) => prev + 1);
    };

    const deskVideo = deskVideoRef.current;
    const mobVideo = mobVideoRef.current;

    if (deskVideo) {
      deskVideo.addEventListener("canplay", handleCanPlay);
    }
    if (mobVideo) {
      mobVideo.addEventListener("canplay", handleCanPlay);
    }

    return () => {
      if (deskVideo) {
        deskVideo.removeEventListener("canplay", handleCanPlay);
      }
      if (mobVideo) {
        mobVideo.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, []);

  useEffect(() => {
    // When both videos are loaded, hide loading screen
    if (videosLoaded >= 2) {
      setIsLoading(false);
    }
  }, [videosLoaded]);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-pink-100 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-300 border-t-fuchsia-500"></div>
            <p className="text-pink-700 text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="h-screen w-screen flex px-2 items-center relative justify-center bg-pink-100">
        {/* Desktop Video */}
        <video
          ref={deskVideoRef}
          src={home_desk}
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          className="hidden md:block fixed inset-0 z-10 h-screen w-screen object-cover"
        ></video>

        {/* Mobile Video */}
        <video
          ref={mobVideoRef}
          src={front_mob}
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          className="block md:hidden fixed inset-0 z-10 h-screen w-screen object-cover"
        ></video>

        {/* Content Box */}
        <div className="h-98 w-98 gap-3 z-20 md:w-120 md:h-98 border-2 border-fuchsia-300/50 bg-pink-300/20 text-white backdrop-blur-2xl rounded-lg p-4 flex flex-col items-left justify-center">
          <h2 className="text-6xl">Hi, Angel</h2>
          <p className="text-2xl">This is for an Angel That i met online</p>
          <p>
            just a site from my side for all those great moments, i do typo's
            alot so ignore them
          </p>
          <div>
            <Link
              to={"/message"}
              className="px-4 py-2 border text-black rounded bg-amber-200 hover:bg-amber-300 transition"
            >
              Enter the Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
