import React, { useEffect } from 'react';
import {useIsFocused} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'
import { View, Text, Button } from 'react-native';
import {logout,load_user} from '../../Action/UserAction'
// import AsyncStorage from '@react-native-community/async-storage'

function Profile(props) {
const dispatch =useDispatch()
const users = useSelector(state=> state.users)

useEffect(() => {
  const unsubscribe = props.navigation.addListener('focus', () => {
    // do something
    dispatch(load_user())
  });

  return unsubscribe;
}, [props.navigation]);

  return(
    <View>
      {users.user &&
      <View>
      <Text>E-mail : {users.user.email}</Text>
      <Text>Name : {users.user.name}</Text>
        <Button title="Log out " onPress={()=> dispatch(logout(props.navigation))}></Button>

      </View>
      
      }
      

    </View>
  )
}
export default Profile


