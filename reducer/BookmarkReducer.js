import {SAVE_VOCAB,CANCLE_VOCAB,FETCH_BOOKMARK} from '../Action/Type'
export default function (state=[],action) {
    switch (action.type) {
        case FETCH_BOOKMARK:
            return action.payload
        case SAVE_VOCAB:
            
            return action.payload;
        case CANCLE_VOCAB:
            return action.payload
        default:
            return state;
    }
}