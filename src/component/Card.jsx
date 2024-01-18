import React from 'react'
// import { WiDayCloudy,WiCloudyGusts } from "react-icons/wi";

const Card = ({data}) => {
  console.log(data);
  if(JSON.stringify(data) !== "{}"){
    return (
      <div className='d-flex flex-column align-items-center gap-2 mt-4 mb-3'>
        <p>Jan 18, 08:27pm</p>
        <h1>{data.name},{data.sys.country} </h1>
        <h2>
          <img src= {`https://openweathermap.org//img/w/${data.weather[0].icon}.png`} alt='icon'/>
          {data.main.temp}°C
          </h2>
        <p>{data.weather[0].description}</p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Visibility:{data.visibility/1000}km</p>
      </div>
    )
  }
}

export default Card