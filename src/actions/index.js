import axios from 'axios';

const API_KEY = '7c324dd8693826b8d1b3314e5288e35d';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request  =axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}
