import axios from 'axios';

const apiMaps = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/distancematrix', 
},{
    headers: {
        "Access-Control-Allow-Credentials": 'true',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
    },
});

export default apiMaps;