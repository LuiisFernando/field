import axios from "axios";

const api = axios.create({
  baseURL: "https://api.citybik.es/"
});

export default api;
