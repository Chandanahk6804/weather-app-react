import React from 'react'
import {useWeather} from '../context/Weather'
const Input = (props) => {
    const weather = useWeather();
  return (
    <input className='input-field' value={weather.city} onChange={(e)=>weather.setCity(e.target.value)}/>
  )
}

export default Input