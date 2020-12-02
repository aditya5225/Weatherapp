import { DATA_LOADING, GET_WEATHER_DATA, ADD_CITY, CURRENT_LOCATION } from '../Constants/constants';
import Axios from 'axios';


export const Data_loading = () => {
    return {
        type: DATA_LOADING
    }
}

export const Get_weather_data = (city_name) => {
    return async (dispatch) => {
        try {
            dispatch(Data_loading());
            const result = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=143c1d8dda3fbf06c2b57f70f5bf87aa`)
            dispatch({
                type: GET_WEATHER_DATA,
                payload: result.data
            })
        } catch (err) {
            alert(`"${city_name}" is not a city, please enter a valid city name & pelling!!`);
        }
    }
}

export const current_location = () => {
    return async (dispatch) => {
        try {
            dispatch(Data_loading());
            const result = await Axios.get('https://geolocation-db.com/json/1a811210-241d-11eb-b7a9-293dae7a95e1')
            dispatch({
                type: CURRENT_LOCATION,
                payload: result.data
            })
        } catch (err) {
            alert('Please unable your location or enter a city name');
        }
    }
}


export const Add_city = (city_name) => {
    return {
        type: ADD_CITY,
        payload: city_name
    }
}