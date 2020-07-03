import {FETCH_VOCAB,LOCALHOST} from './Type'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
export const  fetch_vocab = (catogory)=>{
    return async dispatch=>{
    const result =await axios.get(`${LOCALHOST}native/listword/${catogory}`)
        
        dispatch({type:FETCH_VOCAB,payload: result.data})
    }
    
}

