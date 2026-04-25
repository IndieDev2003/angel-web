// import desk_bg from "../assets/front_desk.jpg";

// interface IWeatherComp {
//   name?: string;
//   time?: Date;
//   temp?: number;
//   sunset?: string;
//   wind?: number;
//   temp_max?: number;
//   icon?: string;
//   greeting?: string;
//   userName?: string;
// }

// function WeatherComp({
//   name = "Phillaur",
//   time = new Date(),
//   temp = 20,
//   sunset = new Date(),
//   wind = 36,
//   temp_max = 21,
//   icon = "11d",
//   greeting = "Good Night",
//   userName = "Gagan",
// }: IWeatherComp) {
//   // Format time to display day and time
//   const formattedTime = time.toLocaleString("en-US", {
//     weekday: "long",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const formattedSunset = sunset.toLocaleString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   return (
//     <div className="h-screen w-screen flex items-center justify-center relative">
//       {/* Background Image */}
//       <img
//         src={desk_bg}
//         className="absolute h-screen w-screen z-10 object-cover"
//         alt="desk background"
//       />

//       {/* Main Weather Card */}
//       <div className="w-screen md:w-78 h-screen md:h-120 text-white flex justify-between flex-col md:rounded-2xl p-4 z-20 bg-gray-800/20 backdrop-blur-2xl">
//         {/* Header Section - City Name and Time */}
//         <div>
//           <h2 className="text-4xl font-bold">{name}</h2>
//           <p className="text-sm text-gray-200">{formattedTime}</p>
//         </div>

//         {/* Weather Icon */}
//         <div className="w-full flex items-center justify-center">
//           {icon && (
//             <img
//               src={`https://openweathermap.org/payload/api/media/file/${`11d`}.png`}
//               alt={`weather icon for ${name}`}
//               className="w-34 h-34"
//             />
//           )}
//         </div>
//         {/* Main Temperature Section */}
//         <div className="flex flex-col items-center w-full">
//           <h3 className="text-6xl font-bold">
//             {temp}
//             <span className="text-3xl">°C</span>
//           </h3>
//           <p className="text-lg mt-2">{greeting}</p>
//           <p className="text-sm text-gray-200">{userName}</p>
//           <hr className="w-12 border-t-2 border-white mt-4" />
//         </div>

//         {/* Weather Details Section */}
//         <div className="flex items-center justify-around w-full text-white">
//           {/* Sunset */}
//           <div className="flex flex-col items-center px-2">
//             <p className="text-sm font-semibold">Sunset</p>
//             <p className="text-base">{formattedSunset}</p>
//           </div>

//           {/* Wind Speed */}
//           <div className="flex flex-col items-center px-4 border-x border-white">
//             <p className="text-sm font-semibold">Wind</p>
//             <p className="text-base">{wind}km/h</p>
//           </div>

//           {/* Max Temperature */}
//           <div className="flex flex-col items-center px-2">
//             <p className="text-sm font-semibold">Temp</p>
//             <p className="text-base">
//               {temp_max}
//               <span>°C</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WeatherComp;

import { useEffect, useState } from "react";
import desk_bg from "../assets/front_desk.jpg";

interface IWeatherComp {
  name?: string;
  time?: Date;
  temp?: number;
  sunset?: string;
  wind?: number;
  temp_max?: number;
  icon?: string;
  greeting?: string;
  userName?: string;
}

interface WeatherData {
  name: string;
  time: Date;
  temp: number;
  sunset: Date;
  wind: number;
  temp_max: number;
  icon: string;
}

function WeatherComp({
  name = "Phillaur",
  time = new Date(),
  temp = 20,
  sunset = new Date(),
  wind = 36,
  temp_max = 21,
  icon = "11d",
  greeting = "Good Night",
  userName = "Gagan",
}: IWeatherComp) {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    name,
    time,
    temp,
    sunset,
    wind,
    temp_max,
    icon,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API || "your_api_key_here";

  // Get user location and fetch weather
  useEffect(() => {
    const fetchWeatherByLocation = () => {
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser");
        setLoading(false);
        return;
      }

      // Get user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          let errorMessage = "Failed to get location";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage =
                "Location permission denied. Using default location.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information unavailable. Using default.";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timeout. Using default.";
              break;
          }
          setError(errorMessage);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        },
      );
    };

    const fetchWeatherData = async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        // Parse sunset time
        const sunsetTime = new Date(data.sys.sunset * 1000);

        setWeatherData({
          name: data.name,
          time: new Date(),
          temp: Math.round(data.main.temp),
          sunset: sunsetTime,
          wind: Math.round(data.wind.speed),
          temp_max: Math.round(data.main.temp_max),
          icon: data.weather[0].icon,
        });

        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching weather",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherByLocation();
  }, [API_KEY]);

  // Format time to display day and time
  const formattedTime = weatherData.time.toLocaleString("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedSunset = weatherData.sunset.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      {/* Background Image */}
      <img
        src={desk_bg}
        className="absolute h-screen w-screen z-10 object-cover"
        alt="desk background"
      />

      {/* Main Weather Card */}
      <div className="w-screen md:w-78 h-screen md:h-120 text-white flex justify-between flex-col md:rounded-2xl p-4 z-20 bg-gray-800/20 backdrop-blur-2xl">
        {/* Header Section - City Name and Time */}
        <div>
          <h2 className="text-4xl font-bold">{weatherData.name}</h2>
          <p className="text-sm text-gray-200">{formattedTime}</p>

          {/* Status Messages */}
          {loading && (
            <p className="text-xs text-yellow-300 mt-1">
              📍 Fetching your location...
            </p>
          )}
          {error && <p className="text-xs text-red-300 mt-1">⚠️ {error}</p>}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="w-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
          </div>
        )}

        {/* Weather Icon */}
        {!loading && (
          <div className="w-full flex items-center justify-center">
            {weatherData.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`}
                alt={`weather icon for ${weatherData.name}`}
                className="w-34 h-34"
              />
            )}
          </div>
        )}

        {/* Main Temperature Section */}
        {!loading && (
          <div className="flex flex-col items-center w-full">
            <h3 className="text-6xl font-bold">
              {weatherData.temp}
              <span className="text-3xl">°C</span>
            </h3>
            <p className="text-lg mt-2">{greeting}</p>
            <p className="text-sm text-gray-200">{userName}</p>
            <hr className="w-12 border-t-2 border-white mt-4" />
          </div>
        )}

        {/* Weather Details Section */}
        {!loading && (
          <div className="flex items-center justify-around w-full text-white">
            {/* Sunset */}
            <div className="flex flex-col items-center px-2">
              <p className="text-sm font-semibold">Sunset</p>
              <p className="text-base">{formattedSunset}</p>
            </div>

            {/* Wind Speed */}
            <div className="flex flex-col items-center px-4 border-x border-white">
              <p className="text-sm font-semibold">Wind</p>
              <p className="text-base">{weatherData.wind}km/h</p>
            </div>

            {/* Max Temperature */}
            <div className="flex flex-col items-center px-2">
              <p className="text-sm font-semibold">Temp</p>
              <p className="text-base">
                {weatherData.temp_max}
                <span>°C</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherComp;