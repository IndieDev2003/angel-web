import axios from "axios";

const openWeatherAPI = import.meta.env.VITE_WEATHER_API; // For Vite

export const fetchWeather = async (cityName?:string) => {
  try {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
      },
      (err) => {
        console.log(err)
      },
    );

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=${openWeatherAPI}`,
    );

    console.log(res.data)
    return res.data;
  } catch (error:any) {
    console.log('Error :',error?.message);
    throw error;
  }
};

export const loadLocation = async () =>{
  try {
    
  } catch (error:any) {
    console.log("Error :",error?.message)
  }
}
