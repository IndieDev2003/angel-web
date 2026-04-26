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
    queryFn: () => fetchWeather("New Delhi"),
    
  });

  if (isLoading) return <LoadingWeather/>;
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
        userName="@Alpha001"
        main={weather?.weather[0].main}
      />
    </div>
  );
}

export default Weather;

function LoadingWeather(){
  return (
    <div className="flex items-center justify-center text-3xl h-screen w-screen ">
      <h1>Loading Weather</h1>
      <div></div>
    </div>
  );
}
