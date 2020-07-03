import React ,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {load_user} from '../../Action/UserAction'
import {View,Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
 function NavStart (props){
     const dispatch = useDispatch()
     const users = useSelector(state => state.users)
    useEffect(() => {
       
    return async()=>{
        const Token = await AsyncStorage.getItem('token')
        if (Token) dispatch(load_user())
        if(!Token) users
    }        
      
      }, []);
console.log('====================================');
console.log(users);
console.log('====================================');
  return <View>
                <Text>Loading</Text>
                {users.user ?props.mytabs():props.auth()}
        </View>
    
    }
export default NavStart