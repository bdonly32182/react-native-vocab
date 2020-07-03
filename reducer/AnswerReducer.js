import {FETCH_ANSWER} from '../Action/Type'
export default function (state=[],action) {
    switch (action.type) {
        case FETCH_ANSWER:
            
            return action.payload;
    
        default:
            return state;
    }
}