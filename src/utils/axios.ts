import axios from "axios";

const openWeatherAPI = import.meta.env.VITE_WEATHER_API; // For Vite

interface IFetchWeather {
  cityName?:string,
  longitude?:number| string,
  latitude?:number| string
}


export const fetchWeather = async ({cityName,longitude,latitude}:IFetchWeather) => {
  try {

    let res;

    if(!latitude || !longitude){
     res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=${openWeatherAPI}`,
    );
    }

      res = await axios.get(
       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${openWeatherAPI}`,
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
