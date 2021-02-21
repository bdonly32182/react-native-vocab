import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {View,Text,ScrollView, TouchableHighlight} from 'react-native'
import {save_vocabs,cancle_vocabs} from '../../Action/BookmarkAction'
function ItemVocab(props) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [save,setSaved] = useState(false);
    const {vocabs}  = props
    const onClickSave =(vocabs)=>{
        if (save) {
            dispatch(cancle_vocabs(vocabs))
            setSaved(false)
        } else {
            dispatch(save_vocabs(vocabs))
            setSaved(true)

        }
        
    }
    console.log(users);
    return (
        <View>
            <ScrollView 
            >
                    <View style={{paddingLeft:10,borderWidth:0.5,width:420,height:130,borderColor:'#dddddd',borderTopWidth:10,borderRightWidth:25,borderLeftWidth:20,marginTop:15}}>
                          <View>
                        {users.user &&
                          <TouchableHighlight 
                          style={{paddingLeft:300,fontSize:20}}
                          onPress={()=>onClickSave(vocabs)}>
                              {save ?
                               <Text style={{fontSize:15}}>cancle</Text>
                               :
                               <Text style={{fontSize:15}}>Save</Text>

                            }
                             
                          </TouchableHighlight>
                        }
                          <View style={{paddingLeft:20,marginTop:5}}>
                            <Text style={{fontSize:20,fontWeight:'500'}}>{vocabs.word}</Text>
                          <Text style={{fontWeight:'500',fontSize:23}}>{vocabs.mean}</Text>
                          <Text style={{fontWeight:'500',fontSize:23}}>{vocabs.category}</Text>
                          </View>
                          
                          </View>

                    </View>
            </ScrollView>
        </View>
    )
}

export default ItemVocab