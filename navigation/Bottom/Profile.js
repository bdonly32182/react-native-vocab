import React, { useEffect, useState } from 'react';
import {useIsFocused} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'
import { View, Text, Button,Modal ,TouchableHighlight} from 'react-native';
import {logout,load_user} from '../../Action/UserAction'
import Login from '../Auth/Login';
import AsyncStorage from '@react-native-community/async-storage'

function Profile(props) {
const dispatch =useDispatch();
const users = useSelector(state=> state.users);
const [visible,setVisible] = useState(true);
const [register,setRegister] = useState(false);
useEffect(() => {
  const unsubscribe = props.navigation.addListener('focus', async() => {
    // do something
    let token =await AsyncStorage.getItem('token')
   users.length>0||token?dispatch(load_user())&&setVisible(false):setVisible(true);
  });
  
  return unsubscribe;
}, [props.navigation,users,visible]);

  return(
    <View>
      {users.user ?
      <View>
      <Text>E-mail : {users.user.email}</Text>
      <Text>Name : {users.user.name}</Text>
        <Button title="Log out " onPress={()=> dispatch(logout(props.navigation))}></Button>

      </View>
      :
      <View>
        <Modal  animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
        >
          <Login />
                   
        </Modal>
      </View>
      }
      

    </View>
  )
}
export default Profile


