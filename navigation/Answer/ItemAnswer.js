import React,{useState} from 'react'
import {View,Text,ScrollView, SafeAreaView} from 'react-native'
function ItemAnswer(props) {
    
    const {answer}  = props
  console.log('====================================');
  console.log(answer);
  console.log('====================================');
    return (
        <View>
             <Text>Question:{answer.question}</Text>
                        <Text>A:{answer.choiceA}</Text>
                        <Text>B:{answer.choiceB}</Text>
                        <Text>C:{answer.choiceC}</Text>
                        <Text>D:{answer.choiceD}</Text>
             {/* <SafeAreaView style={{flex:1,marginTop:5}}>
            <View style={{flex:1}}>
             
                <ScrollView
                    scrollEventThrottle ={16}
                >
                  <View style={{flex:1,backgroundColor:'white',paddingTop:10}}>
                    <View style={{marginTop:40,paddingHorizontal:20}}>
                        
                        
                        <Text>Question:{answer.question}</Text>
                        <Text>A:{answer.choiceA}</Text>
                        <Text>B:{answer.choiceB}</Text>
                        <Text>C:{answer.choiceC}</Text>
                        <Text>D:{answer.choiceD}</Text>

                        
                    </View>
                  </View>
                </ScrollView>
            </View>
          </SafeAreaView> */}
        </View>
    )
}

export default ItemAnswer