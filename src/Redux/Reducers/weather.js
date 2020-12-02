import { DATA_LOADING, GET_WEATHER_DATA } from '../Constants/constants';

const intState = {
    city: '',
    country: '',
    temp: '',
    max_temp: '',
    min_temp: '',
    day: '',
    date: '',
    time: '',
    loading: false
};


export const weather = (state = intState, action) => {
    switch (action.type) {
        case GET_WEATHER_DATA:

            const getDay = () => {
                let res = new Date();
                let result = `${res.toLocaleString('default', { weekday: 'short' })}`;
                return result;
            };

            const getDate = () => {
                let res = new Date();
                let result = `${res.getDate()} ${res.toLocaleString('default', { month: 'short' })}`;
                return result;
            };

            const getTime = () => {
                let res = new Date();
                let result = `${res.toLocaleString('default', { timeStyle: 'short' })}`;
                return result;
            };

            const weatherType = () => {
                return action.payload.weather[0].main;
            }

            return {
                ...state,
                city: action.payload.name,
                country: action.payload.sys.country,
                temp: parseFloat(action.payload.main.temp - 273.15).toFixed(2),
                max_temp: parseFloat(action.payload.main.temp_max - 273.15).toFixed(2),
                min_temp: parseFloat(action.payload.main.temp_min - 273.15).toFixed(2),
                day: getDay(),
                date: getDate(),
                time: getTime(),
                weather_type: weatherType(),
                loading: false
            }

        case DATA_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}