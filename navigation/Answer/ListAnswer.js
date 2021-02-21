import React, { useEffect,useState } from 'react';
import { View, Text,ImageBackground ,TouchableOpacity,Modal} from 'react-native';
import {fetch_answer} from '../../Action/AnswerAction'
import CheckBox from '@react-native-community/checkbox';
import AppIntroSlider from 'react-native-app-intro-slider';

import {useDispatch,useSelector} from 'react-redux'

function ListAnswer(props) {
  const dispatch = useDispatch();
  const [no,setNo] = useState(0);
  const [visible,setVisible] = useState(false);
  const [choiceA,setChoiceA] = useState(false);
  const [choiceB,setChoiceB] = useState(false);
  const [choiceC,setChoiceC] = useState(false);
  const [choiceD,setChoiceD] = useState(false);
  const [correct,setCorrect] = useState([]);
  const answers = useSelector(state=>state.answers);
  useEffect(() => {
    const { category} = props.route.params
      // this.props.fetch_answer(category)
      dispatch(fetch_answer(category));
  }, [dispatch]);
 const _renderItem = ({ item }) => {
   console.log(item);
    return (
      <View style={{flex: 1,flexDirection: "column"}} key={item._id}>
        
        <ImageBackground source={require('../../image/answers.jpg')} 
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
            }}>
          <View style={{paddingTop:20}}>
            <Text style={{color:'#EEF2F2',padding:10,fontSize:20}}>{` ${item.question}`}</Text>
             <Text  
             style={item.answer==="choiceA"?{backgroundColor:'red',alignSelf:'center',fontSize:20}:
             {color:'#EEF2F2',alignSelf:'center',fontSize:20}}
             >
               {`A:   ${item.choiceA}`}
               </Text>
             <Text  style={item.answer==="choiceB"?{backgroundColor:'red',alignSelf:'center',fontSize:20}
             :{color:'#EEF2F2',alignSelf:'center',fontSize:20}}
             >
               {`B:   ${item.choiceB}`}
             </Text>
             <Text style={item.answer==="choiceC"?{backgroundColor:'red',alignSelf:'center',fontSize:20}
             :{color:'#EEF2F2',alignSelf:'center',fontSize:20}}
             >{` C:   ${item.choiceC}`}</Text>
             <Text  style={item.answer==="choiceD"?{backgroundColor:'red',alignSelf:'center',fontSize:20}
             :{color:'#EEF2F2',alignSelf:'center',fontSize:20}}
             >{`D:   ${item.choiceD}`}</Text>
          </View>
            
    </ImageBackground>
      </View>
    );
  }
const  _onDone = () => {
    const {navigate} = props.navigation
    setVisible(false);
    navigate("HomeAnswer")
  }
 const onNext = (answer,no) => {
 
   if(answer.answer==="choiceA"&& choiceA) setCorrect([...correct,{...answer}])
   if(answer.answer==="choiceB"&& choiceB) setCorrect([...correct,{...answer}])
   if(answer.answer==="choiceC"&&choiceC) setCorrect([...correct,{...answer}])
   if(answer.answer==="choiceD"&&choiceD) setCorrect([...correct,{...answer}])
   setChoiceA(false);
   setChoiceB(false);
   setChoiceC(false);
   setChoiceD(false);
  no<answers.length-1&& setNo(no+1);
  
  if(no===answers.length-1) return setVisible(true);
 }
 const onFilterWrong =()=>{
  let mapCorrect = correct.map(corect => corect._id)
  let wrong = answers.filter(answer =>!mapCorrect.includes(answer._id));
   return wrong
 }
  return (
    <View style={{flex: 1,flexDirection: "column"}} >
    {!visible&&<ImageBackground source={require('../../image/board.jpg')} 
    style={{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
      }}>
    {answers.length>0&&(
      <>
      <View>
    <Text style={{color:'#EEF2F2',padding:10}}>{answers[no].question}</Text>
    
            <CheckBox 
              disabled={choiceB||choiceC||choiceD?true:false}
              value={choiceA} onValueChange={setChoiceA}></CheckBox>
             <Text  style={{color:'#EEF2F2',alignSelf:'center'}}>{answers[no].choiceA}</Text>
         
             <CheckBox 
              disabled={choiceA||choiceC||choiceD?true:false}
              value={choiceB} onValueChange={setChoiceB}></CheckBox>
             <Text  style={{color:'#EEF2F2',alignSelf:'center'}}>{answers[no].choiceB}</Text>
             
             <CheckBox 
              disabled={choiceB||choiceA||choiceD?true:false}
              value={choiceC} onValueChange={setChoiceC}></CheckBox>
             <Text style={{color:'#EEF2F2',alignSelf:'center'}}>{answers[no].choiceC}</Text>
            
             <CheckBox 
              disabled={choiceB||choiceC||choiceA?true:false}
              value={choiceD} onValueChange={setChoiceD}></CheckBox>
             <Text  style={{color:'#EEF2F2',alignSelf:'center'}}>{answers[no].choiceD}</Text>
    </View> 
    <View>
      <TouchableOpacity onPress={()=>choiceA||choiceB||choiceC||choiceD?onNext(answers[no],no):null}>
        <Text>{no<answers.length-1?"ข้อต่อไป":"ส่งคำตอบ"}</Text>
      </TouchableOpacity>
    </View>
    </>
    )}
    </ImageBackground>
    }
    <Modal animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                  setVisible(false);
                }}
                >
      <AppIntroSlider 
      // data={correct}
      data={onFilterWrong()}
      renderItem={_renderItem}
      onDone={_onDone}
      />
    </Modal>
  </View>
  )
}

export default ListAnswer

