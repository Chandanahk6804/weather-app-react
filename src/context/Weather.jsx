import { createContext, useContext, useState } from "react";
import {getWeatherData} from '../api'
const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider = (props)=>{
    const [data,setData] = useState(null)
    const [city,setCity] = useState(null)

    const fetchData = async ()=>{
        const response = await getWeatherData(city)
        setData(response)
    }

    return <WeatherContext.Provider value={{city,data,setCity,fetchData}}>{props.children}</WeatherContext.Provider>
}