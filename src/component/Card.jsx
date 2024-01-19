import React from "react";
import Clock from 'react-clock';
import { useState,useEffect } from "react";
import 'react-clock/dist/Clock.css';

const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center gap-2 mt-4 mb-3">
        <Clock value={value} />
        <h1>
          {data.name},{data.sys.country}{" "}
        </h1>
        <h2>
          <img
            src={`https://openweathermap.org//img/w/${data.weather[0].icon}.png`}
            alt="icon"
          />
          {data.main.temp}°C
        </h2>
        <p>{data.weather[0].description}</p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Visibility:{data.visibility / 1000}km</p>
      </div>
    );
  }else{
    return (
      <div>
        <h2 className="text-danger text-center my-4">Loading.....</h2>
      </div>
    )
  }
};

export default Card;
