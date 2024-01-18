import axios from "axios";


export const api = axios.create({
  baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key = 'b2cc46d377bbf9d98bc3444796b9f310'