import { FETCH_VOCAB } from '../Action/Type';
export default function(state=[],action){
    switch (action.type) {
        case FETCH_VOCAB:
            
            return action.payload;
    
        default:
            return state;
    }
}