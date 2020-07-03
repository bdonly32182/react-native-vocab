import axios from 'axios'
import {LOCALHOST,FETCH_ANSWER} from './Type'
export const fetch_answer = (category) =>{
    return async dispatch=>{
       const result = await axios(LOCALHOST+'native/answer/'+category)
    dispatch({type:FETCH_ANSWER,payload:result.data}) 
    }
    
}