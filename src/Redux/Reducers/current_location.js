import { DATA_LOADING, CURRENT_LOCATION } from '../Constants/constants';

const intState = {
    location: 'local',
    loading: false
};


export const current_location = (state = intState, action) => {
    switch (action.type) {
        case CURRENT_LOCATION:
            return {
                ...state,
                location: action.payload.city,
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