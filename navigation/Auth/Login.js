import React ,{useState}from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { View,Text ,TextInput, Button,Alert} from 'react-native';
import {login} from '../../Action/UserAction'
export default  Login=(props) => {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.users)
  const [Email,setEmail] = useState('Email Placeholder')
  const [password,setPassword] = useState('Password Placeholder')
  
  return(
    <View>
      {/* {users.msg && Alert.alert(`${users.msg}`)} */}
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      autoFocus={true}
      onChangeText={emails=> setEmail(emails)}
      autoCompleteType="email"
      defaultValue={Email}
      />
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      autoFocus={true}
      autoCompleteType="password"
      onChangeText={pass => setPassword(pass)}
      defaultValue={password}
      />
      <Button title="Login" onPress={()=>dispatch(login(Email,password,props.navigation))}/>
    </View>
  )
};
;