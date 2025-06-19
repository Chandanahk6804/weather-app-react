const baseUrl = "https://api.weatherapi.com/v1/current.json?key=ba0e84f2ef5842bbab4211301240905"
export const getWeatherData = async (city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json()
}