import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apibackgrupo2.azurewebsites.net/',
});

export default api;