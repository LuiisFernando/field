import axios from "axios";

const api = axios.create({
  baseURL: "http://api.citybik.es/"
});

export default api;
