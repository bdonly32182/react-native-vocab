import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { View, Text ,ScrollView} from 'react-native';
import {fetch_bookmark} from '../../Action/BookmarkAction'
function Bookmark(props) {
  const dispatch = useDispatch()
  const bookmarks = useSelector(state=> state.bookmarks)
useEffect(()=>{
  dispatch(fetch_bookmark())
})
const itemBookmark = (bookmarks) =>{
  return Array.isArray(bookmarks)&& bookmarks.map((bookmarks,i)=>{
    return bookmarks.bookmark.map((bookmark,i)=>{
      console.log(bookmark.mean);
      
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

  return(
    <View>
      {itemBookmark(bookmarks)}
    </View>
  )
}

export default Bookmark;
