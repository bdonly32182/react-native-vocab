import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer,useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './navigation/Bottom/Home'
import Profile from './navigation/Bottom/Profile'
import VocabMark from './navigation/Bottom/VocabMark'
import { createStackNavigator } from '@react-navigation/stack';
import HomeVocab from './navigation/Vocab/HomeVocab';
import ListVocab from './navigation/Vocab/ListVocab';
import HomeAnswer from './navigation/Answer/HomeAnswer';
import ListAnswer from './navigation/Answer/ListAnswer';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reduxthunk from 'redux-thunk'
import Reducer from './reducer'
import {useSelector} from 'react-redux'
import Login from './navigation/Auth/Login'
import Register from './navigation/Auth/Register'
import AuthNav from './navigation/Auth/AuthNav';
import NavStart from './navigation/Auth/AuthNav';

function SettingsScreen() {
  const isFocused = useIsFocused();
  
  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="HomeVocab" component={HomeVocab} />
      <Stack.Screen name="ListVocab" component={ListVocab} />
      <Stack.Screen name="HomeAnswer" component={HomeAnswer}/>
      <Stack.Screen name="ListAnswer" component={ListAnswer}/>

    </Stack.Navigator>
  );
}
function  AuthStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name ="Register" component={Register} />

    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();

 function MyTabs() {
  return (
    <Tab.Navigator >
       <Tab.Screen name="Homes" component={MyStack} />
      <Tab.Screen name="Vocabmark" component={VocabMark} />
      <Tab.Screen name="Profile" component ={Profile}/>
      {/* <Tab.Screen name="auth" component ={AuthStack}/> */}

    </Tab.Navigator>
  );
}


const store = createStore(Reducer,{},applyMiddleware(Reduxthunk))
export default  function  App() {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <MyTabs />
      
    </NavigationContainer>
    </Provider>
    
  );
}