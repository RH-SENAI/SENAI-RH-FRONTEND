import axios from "axios";

const api = axios.create({
    baseURL: "https://apibackgrupo2.azurewebsites.net/api",
})

export default api;