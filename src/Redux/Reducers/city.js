import {ADD_CITY} from '../Constants/constants';

const intState= 'local';


export const city = (state= intState, action) => {
    switch (action.type) {
        case ADD_CITY: 
        return action.payload;

        default:
            return state;
    }

}