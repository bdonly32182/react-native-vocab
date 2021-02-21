import React, { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { View, Text ,ScrollView,Modal,TouchableHighlight} from 'react-native';
import {fetch_bookmark} from '../../Action/BookmarkAction'
import {load_user} from '../../Action/UserAction'
import AsyncStorage from '@react-native-community/async-storage'

function Bookmark(props) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  const bookmarks = useSelector(state=> state.bookmarks)
  const [visible,setVisible] = useState(true);
useEffect(()=>{
  const unsubscribe = props.navigation.addListener('focus', async() => {
    // do something
    let token =await AsyncStorage.getItem('token')
    users.user&&token?dispatch(load_user())&& dispatch(fetch_bookmark())&&setVisible(false):setVisible(true);
  });

  return unsubscribe;
},[bookmarks,props.navigation,users]);
const itemBookmark = (bookmarks) =>{
  return bookmarks.length ===0?<Text>ยังไม่มีคำศัพท์ที่เป็นรายการโปรดของคุณ</Text>: Array.isArray(bookmarks)&&  bookmarks.map((bookmarks,i)=>{
    return bookmarks.bookmark.map((bookmark,i)=>{
  
      return   <ScrollView key={i}
      >
              <View style={{paddingLeft:10,borderWidth:0.5,width:420,height:130,borderColor:'#dddddd',borderTopWidth:10,borderRightWidth:25,borderLeftWidth:20,marginTop:15}}>
                    <View>
                  
                    <View style={{paddingLeft:20,marginTop:5}}>
                      <Text style={{fontSize:20,fontWeight:'500'}}>{bookmark.word}</Text>
                    <Text style={{fontWeight:'500',fontSize:23}}>{bookmark.mean}</Text>
                    <Text style={{fontWeight:'500',fontSize:23}}>{bookmark.category}</Text>
                    </View>
                    
                    </View>

              </View>
      </ScrollView>
    })
  })
}
console.log(users.user);
  return(
    <View>
      {users.user?itemBookmark(bookmarks):
      <View>
        <Modal  animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
        >
          <TouchableHighlight onPress={()=>setVisible(false)}><Text>X</Text></TouchableHighlight>
          <Login />
        </Modal>
      </View>}
      
    </View>
  )
}

export default Bookmark;
