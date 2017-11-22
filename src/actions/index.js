import axios from 'axios';

const API_KEY = '03e638f453e63e50a63ae0c9e2466c83';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request  =axios.get(url);

    // console.log('Request', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}
