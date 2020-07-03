import {LOGIN,REGISTER,LOAD_USER} from '../Action/Type';
export default ((state=[],action)=>{
    switch (action.type) {
        case LOGIN:
           return action.payload;
        case REGISTER:
            return action.payload
        case LOAD_USER :
            return action.payload
        case 'login_fail':
            return action.payload
        case 'log_out':
            return []
        default:
            return state;
    }
})