import axios from "axios";

const api = axios.create({
    baseURL: "https://enki.hyoretsu.com",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default api;