import { useEffect, useRef, useState } from "react";
import desk_bg from "../assets/weather.mp4";
import mob_bg from "../assets/mob_weather.mp4";

interface IWeatherComp {
  name?: string;
  time: number;
  temp?: number;
  sunset: number;
  wind?: number;
  temp_max?: number;
  icon?: string;
  greeting?: string;
  userName?: string;
  main?: string;
}

function WeatherComp({
  name,
  time,
  temp,
  sunset,
  wind,
  temp_max,
  icon,
  greeting,
  userName,
  main,
}: IWeatherComp) {
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

  // Format time to display day and time

  // Convert timestamps to Date objects
  const timeDate = new Date(time * 1000);
  const sunsetDate = new Date(sunset * 1000);

  const formattedTime = timeDate.toLocaleString("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedSunset = sunsetDate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="relative">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-white"></div>
            <p className="text-white text-lg">Loading Weather...</p>
          </div>
        </div>
      )}

      <div className="h-screen w-screen flex items-center justify-center relative">
        {/* Background Desktop Video */}
        <video
          ref={deskVideoRef}
          src={desk_bg}
          className="hidden md:block fixed inset-0 w-full h-full object-cover blur- z-10"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
        ></video>

        {/* Background Mobile Video */}
        <video
          ref={mobVideoRef}
          src={mob_bg}
          className="md:hidden block fixed inset-0 w-full h-full object-cover blur- z-10"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
        ></video>

        {/* Main Weather Card */}
        <div className="w-scren md:w-78 h-120 md:h-110 text-white border border-white/40 flex justify-between flex-col p-4 z-20 bg-gray-800/10 backdrop-blur-xs">
          {/* Header Section - City Name and Time */}
          <div>
            <h2 className="text-4xl font-bold">{name}</h2>
            <p className="text-sm text-gray-200">{formattedTime}</p>
            <p className="text-sm text-gray-200">{main}</p>
          </div>

          {/* Weather Icon */}
          <div className="w-full flex items-center justify-center">
            {icon && (
              <img
                src={`https://openweathermap.org/payload/api/media/file/${icon}.png`}
                alt={`weather icon for ${name}`}
                className="w-24 h-24"
              />
            )}
          </div>

          {/* Main Temperature Section */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-6xl font-bold">
              {temp}
              <span className="text-4xl">°C</span>
            </h3>
            <p className="text-lg mt-2">{greeting}</p>
            <p className="text-sm text-gray-200">{userName}</p>
            <hr className="w-12 border-t-2 border-white mt-4" />
          </div>

          {/* Weather Details Section */}
          <div className="flex items-center justify-around w-full text-white">
            {/* Sunset */}
            <div className="flex flex-col items-center px-2">
              <p className="text-sm font-semibold">Sunset</p>
              <p className="text-base">{formattedSunset}</p>
            </div>

            {/* Wind Speed */}
            <div className="flex flex-col items-center px-4 border-x border-white">
              <p className="text-sm font-semibold">Wind</p>
              <p className="text-base">{wind}km/h</p>
            </div>

            {/* Max Temperature */}
            <div className="flex flex-col items-center px-2">
              <p className="text-sm font-semibold">Temp</p>
              <p className="text-base">
                {temp_max}
                <span>°C</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherComp;
