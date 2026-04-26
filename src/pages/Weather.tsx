import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../utils/axios";
import WeatherComp from "../components/WeatherComp";

function Weather() {
  const {
    data: weather,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather("Phillaur"),
  });

  if (isLoading) return <div>Loading Weather...</div>;
  if (isError) return <div>Error fetching weather</div>;

  return (
    <div>
      <WeatherComp
        name={weather?.name}
        time={weather?.dt}
        sunset={weather?.sys.sunset}
        temp={weather?.main.feels_like}
        wind={weather?.wind.speed}
        temp_max={weather?.main.temp}
        icon={weather?.weather[0].icon}
        greeting="Hello"
        userName="Gagan"
        main={weather?.weather[0].main}
      />
    </div>
  );
}

export default Weather;
