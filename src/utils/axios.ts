import axios from "axios";

const openWeatherAPI = import.meta.env.VITE_WEATHER_API; // For Vite

interface IFetchWeather {
  cityName?: string;
  longitude?: number | string;
  latitude?: number | string;
}

export const fetchWeather = async ({
  cityName,
  longitude,
  latitude,
}: IFetchWeather) => {
  try {
    let res;

    // Use coordinates if available, otherwise use city name
    if (latitude && longitude) {
      res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${openWeatherAPI}`,
      );
    } else if (cityName) {
      res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=${openWeatherAPI}`,
      );
    } else {
      throw new Error("Either coordinates or city name is required");
    }

    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.log("Error :", error?.message);
    throw error;
  }
};

export const loadLocation = async () => {
  try {
    return new Promise<{ latitude: number; longitude: number }>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.log("Geolocation error:", error.message);
            reject(error);
          },
        );
      },
    );
  } catch (error: any) {
    console.log("Error :", error?.message);
    throw error;
  }
};
