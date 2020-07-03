import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View, Text } from 'react-native';
import {fetch_answer} from '../../Action/AnswerAction'
import ItemAnswer from './ItemAnswer';
class ListAnswer extends Component {
  
  async componentDidMount (){
    const { category} =await this.props.route.params
      this.props.fetch_answer(category)
  }
  AnswerItem(answers){
    return Array.isArray(answers)&&answers.map((answer,i)=>{
      return <ItemAnswer key={i} answer={answer} />
    })
  }
  render() {
 
    return (
      <View>
        {this.AnswerItem(this.props.answers)}
      </View>
    );
  }
}
function mapStateToprops({answers}){
    return {answers:answers}
}
export default connect(mapStateToprops,{fetch_answer})(ListAnswer);
