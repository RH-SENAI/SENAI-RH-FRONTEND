import axios from "axios";

const api = axios.create({
    baseURL: "https://apigrupobackend.azurewebsites.net/api",
})

export default api;