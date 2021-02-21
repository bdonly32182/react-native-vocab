import axios from 'axios'
import {LOCALHOST,LOGIN,REGISTER,LOAD_USER} from './Type';
import AsyncStorage from '@react-native-community/async-storage'
export const login=(email,password,nav)=>async dispatch =>{
    const result = await axios.post(LOCALHOST+'login',{email,password})
                    if (result.data.token) {
                        AsyncStorage.setItem('token',result.data.token)
                        // nav.navigate('Homes')
                        dispatch({type:LOGIN,payload:result.data})
                    } else {
                        dispatch({type:'login_fail',payload:result.data})
                    }
                         
    
}

export const register =(email,password,name)=>async dispatch=>{
    const result = await axios.post(LOCALHOST+'register',{email,password,name,role:'user'})
    dispatch({type:REGISTER,payload:result.data})
}
export const load_user =()=>async dispatch=>{
    const token =await AsyncStorage.getItem('token')
        const config = {
            headers: {
              'Content-type': 'application/json',
              'auth-token':token
            }
          };
          const result = await axios.get(LOCALHOST+'user/loaduser',config)
          dispatch({type:LOAD_USER,payload:result.data})
}
export const logout =(nav)=>async dispatch=>{
    try{
        await AsyncStorage.removeItem('token')
            nav.nagigate('auth')

    }catch(e){
        console.log('user remove Token error');
        
    }
    dispatch({type:'log_out'})
}