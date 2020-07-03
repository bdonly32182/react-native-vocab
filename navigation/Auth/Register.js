import React ,{useState}from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { View,Text ,TextInput, Button} from 'react-native';
import {register} from '../../Action/UserAction'
export default  Registers => {
  const dispatch = useDispatch()
  const [Email,setEmail] = useState('Email Placeholder')
  const [password,setPassword] = useState('Password Placeholder')
  const [firstname ,setFirstname] = useState('Firstname Placeholder')

  return(
    <View>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      autoFocus={true}
      onChangeText={emails=> setEmail(emails)}
      autoCompleteType="email"
      value={Email}
      />
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      autoFocus={true}
      autoCompleteType="name"
      onChangeText={first => setFirstname(first)}
      value={firstname}
      />
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      autoFocus={true}
      autoCompleteType="password"
      onChangeText={pass => setPassword(pass)}
      value={password}
      />
      <Button title="Register" onPress={()=>dispatch(register(Email,password,firstname))}/>
    </View>
  )
};
;