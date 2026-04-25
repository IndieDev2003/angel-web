import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../utils/axios";

function Weather() {
  const {
    data: weather,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather("Mau"),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching weather</div>;

  return (
    <div>
      
    </div>
  );
}

export default Weather;
