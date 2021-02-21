import React ,{useState}from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { View,Text ,TextInput, Button,Alert,StyleSheet,ImageBackground,TouchableHighlight} from 'react-native';
import {login,register} from '../../Action/UserAction'
export default  Login=(props) => {
  const dispatch = useDispatch();
  const users = useSelector(state=>state.users);
  const [Email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isLogin,setIsLogin] = useState(true);
  const [registEmail,setRegistEmail] = useState('');
  const [registpass,setRegistPass] = useState('');
  const [name,setName] = useState('');
  return(
    <View>
      
     {isLogin &&(
          
          <ImageBackground style={{height:'100%',width:'100%'}}  source={require('../../image/login.jpg')}>
          
          <View style={{flex:1 ,marginTop:10,flexDirection:'column',alignItems:'center'}}>
          <View style={{ height:300,width:300 ,backgroundColor:'white',borderWidth:1,marginTop:90,borderColor:'gray'}}>
            
            <TouchableHighlight
            style={styles.buttonDes}
              onPress={() => 
                setIsLogin(false)
              }>
              <Text style={{color:'white',fontSize:25}}>Switch Register</Text>
            </TouchableHighlight>
              <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    autoFocus={true}
                    onChangeText={emails=> setEmail(emails)}
                    placeholder="กรุณากรอกอีเมลล์"
                    autoCompleteType="email"
                    defaultValue={Email}
                    />
              <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    autoFocus={true}
                    autoCompleteType="password"
                    placeholder="กรุณากรอกรหัสผ่าน"
                    onChangeText={pass => setPassword(pass)}
                    defaultValue={password}
                    />
              <View style={{marginTop:30}}>
              <Button title="Login" onPress={()=>dispatch(login(Email,password))}/>

              </View>
             
          </View>
          
          </View>
          </ImageBackground>
      
      )}
      {!isLogin &&(
                    
                      <ImageBackground style={{height:'100%',width:'100%',alignItems:'center'}} source={require('../../image/login.jpg')}>
                      {/* <View style={{flex:1 ,marginTop:40,flexDirection:'column',justifyContent:'center'}}> */}
                      <View style={{ height:350,width:300 ,backgroundColor:'white',borderWidth:1,marginTop:70,borderColor:'gray'}}>
                        
                        <TouchableHighlight
                        style={styles.buttonDes}
                          onPress={() => 
                            setIsLogin(true)
                          }>
                          <Text style={{color:'white',fontSize:25}}>Switch Login</Text>
                        </TouchableHighlight>
                        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                  autoFocus={true}
                                  onChangeText={emails=> setRegistEmail(emails)}
                                  placeholder="กรุณากรอกอีเมลล์"
                                  autoCompleteType="email"
                                  defaultValue={registEmail}
                                  />
                      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                autoFocus={true}
                                autoCompleteType="password"
                                placeholder="กรุณากรอกรหัสผ่าน"
                                onChangeText={pass => setRegistPass(pass)}
                                defaultValue={registpass}
                                />
                      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                autoFocus={true}
                                onChangeText={names=> setName(names)}
                                placeholder="กรุณากรอกชื่อ"
                                defaultValue={name}
                                />
                            <View style={{marginTop:30}}>
                            <Button title="Regiter" onPress={()=>dispatch(register(registEmail,registpass,name))&&alert('สร้างผู้ใช้งานเรียบร้อยแล้ว')}/>
                            </View>

                      </View>
                      </ImageBackground>
      )}
      
    </View>
  )
};
const styles = StyleSheet.create({
  buttonDes:{height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:200,
  borderRadius:20,    
  backgroundColor: "#8B0000",
  marginLeft:50,
  marginTop:5
},
buttonBlue:{height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:200,
  borderRadius:20,    
  backgroundColor: "dodgerblue",
  marginLeft:50,
  marginTop:5
}
})