import {combineReducers} from 'redux';
import {weather} from './weather';
import {city} from './city';
import {current_location} from './current_location'


const rootReducer= combineReducers({
    weather,
    city,
    current_location
})


export default rootReducer;