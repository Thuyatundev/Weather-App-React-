import React,{useEffect, useState} from 'react'
import Form from './component/Form'
import Card from './component/Card'
import 'bootstrap/dist/css/bootstrap.css'
import {api,api_key} from "./api/api.js"

const App = () => {

  const [data,setData] = useState({});
  const [city,setCity] =useState("Singapore");

  const fetchWeather = async()=>{
    const res = await api.get( `/weather?q=${city}&appid=${api_key}` )
    setData(res.data)
  }

  useEffect(()=>{
    fetchWeather();
  },[])

  return (
    <div className='w-full d-flex justify-content-center min-vh-100 align-items-center'>
     <div className='shadow-lg bg-white text-dark gap-4 mt-3 rounded'>
        <Form/>
        <Card data={data}/>
     </div>
    </div>
  )
}

export default App