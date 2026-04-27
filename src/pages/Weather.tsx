import { useQuery } from "@tanstack/react-query";
import { fetchWeather, loadLocation } from "../utils/axios";
import WeatherComp from "../components/WeatherComp";
import { useEffect, useState } from "react";

type Cords = {
  lat: number | string;
  lon: number | string;
};

function Weather() {
  const [cords, setCords] = useState<Cords>({ lat: "", lon: "" });
  const [hasLocation, setHasLocation] = useState(false);
  const [cityName] = useState("London"); // Default fallback city

  useEffect(() => {
    loadLocation()
      .then((location) => {
        setCords({
          lat: location.latitude,
          lon: location.longitude,
        });
        setHasLocation(true);
      })
      .catch(() => {
        // Location access denied, use city name instead
        console.log("Location access denied or unavailable, using city name");
        setHasLocation(true);
      });
  }, []);

  const {
    data: weather,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["weather", cords.lat, cords.lon, cityName],
    queryFn: () =>
      fetchWeather({
        latitude: cords.lat || undefined,
        longitude: cords.lon || undefined,
        cityName: !cords.lat ? cityName : undefined,
      }),
    enabled: hasLocation,
  });

  

  if (isLoading) return <LoadingWeather />;
  if (isError) return <ErrorWeather />;

  return (
    <div>

      {/* Weather Component */}
      <WeatherComp
        name={weather?.name}
        time={weather?.dt}
        sunset={weather?.sys.sunset}
        temp={weather?.main.feels_like}
        wind={weather?.wind.speed}
        temp_max={weather?.main.temp}
        icon={weather?.weather[0].icon}
        greeting="Hello"
        userName="@Alpha001"
        main={weather?.weather[0].main}
      />
    </div>
  );
}

export default Weather;

function LoadingWeather() {
  return (
    <div className="flex items-center justify-center text-3xl h-screen w-screen">
      <div className="flex flex-col items-center gap-4">
        <h1>Loading Weather</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    </div>
  );
}

function ErrorWeather() {
  return (
    <div className="h-screen w-screen bg-pink-300 flex items-center justify-center">
      <h2 className="text-3xl md:text-5xl text-white text-center px-4 font-semibold">
        Oh no Something Brokeeeee My mistake
      </h2>
    </div>
  );
}
