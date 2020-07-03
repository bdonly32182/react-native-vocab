import {LOCALHOST,SAVE_VOCAB,CANCLE_VOCAB,FETCH_BOOKMARK} from './Type'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const fetch_bookmark =()=>async dispatch=>{
    const token = await AsyncStorage.getItem('token')
    
    const config = {
        headers: {
          'Content-type': 'application/json',
          'auth-token':token
        }
      };
      const result = await axios.get(LOCALHOST+'native/bookmark',config)
      console.log(result.data);
      
      dispatch({type:FETCH_BOOKMARK,payload:result.data})
}
export const save_vocabs =(bookmark)=>async dispatch=>{
    const token = await AsyncStorage.getItem('token')
    const config = {
        headers: {
          'Content-type': 'application/json',
          'auth-token':token
        }
      };
  const result =await  axios.post(LOCALHOST+'native/saveword',{bookmark:bookmark},config)
      dispatch({type:SAVE_VOCAB,payload:result.data})
}

export const cancle_vocabs = (bookmark) => async dispatch =>{
    const token = await AsyncStorage.getItem('token')
    const config = {
        headers: {
          'Content-type': 'application/json',
          'auth-token':token
        }
      };
    const result = await axios.post(LOCALHOST+'native/cancleword',{bookmark:bookmark},config)
    dispatch({type:CANCLE_VOCAB,payload:result.data})
}