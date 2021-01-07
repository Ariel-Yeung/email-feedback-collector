import { FETCH_USER } from '../actions/types';

// state = null if unknown status, false if not logged in
export default function(state = null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}