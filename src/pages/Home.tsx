import { useEffect, useRef, useState } from "react";
import desk_video from "../assets/download.mp4";
import mob_video from "../assets/mob_download.mp4";

function Home() {
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
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-white"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-blend-soft-light flex items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
        {/* Desktop Video */}
        <video
          ref={deskVideoRef}
          autoPlay
          src={desk_video}
          muted
          loop
          preload="auto"
          playsInline
          className="hidden md:block fixed inset-0 w-full h-full object-cover opacity-65 z-10"
        ></video>

        {/* Mobile Video */}
        <video
          ref={mobVideoRef}
          autoPlay
          src={mob_video}
          muted
          loop
          preload="auto"
          playsInline
          className="block md:hidden fixed inset-0 w-full h-full object-cover opacity-65 z-10"
        ></video>

        <p className="z-20 p-2 max-w-2xl">
          In a world where everything feels loud and uncertain, <br /> you
          arrived quietly—almost like a pause I didn't know I needed. <br /> At
          first, there was distance, a little fear, <br /> two strangers
          standing on unfamiliar ground. <br />
          But somewhere between late conversations and honest words, <br /> that
          distance faded… and something real took its place. <br /> You
          listened—not to reply, but to understand. <br /> You saw the chaos,
          the mistakes, <br /> the parts I don't show easily, and instead of
          walking away, you stayed. <br /> We spoke about fears, about faith,{" "}
          <br /> about the weight of choices— and somehow, <br /> in those
          conversations, <br /> you became a mirror I never had, <br />{" "}
          reflecting not just who I am, but who I could be. <br /> You didn't
          come into my life to fix it, <br /> but your presence made me want to
          fix it myself. <br /> And maybe that's what makes you rare— not an
          escape from reality, <br /> but a reason to face it with a little more
          strength, <br /> a little more clarity. <br /> This page isn't about
          perfection, it's about gratitude— for the conversations, <br /> the
          honesty, and for you… being exactly who you are.
        </p>
      </div>
    </div>
  );
}

export default Home;
