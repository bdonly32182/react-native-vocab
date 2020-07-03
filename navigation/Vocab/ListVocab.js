import React, { Component } from 'react';
import { View, Text,SectionList,SafeAreaView ,StyleSheet} from 'react-native';
import {connect } from 'react-redux'
import {fetch_vocab} from '../../Action/VocabAction'
import ItemVocab from './ItemVocab';

class ListVocab extends Component {
  constructor(props) {
    super(props);
    
  }
   
  
async componentDidMount (){
  const { category} =await this.props.route.params
    this.props.fetch_vocab(category)
}
VocabItem(vocabs){
  return Array.isArray(vocabs)&&vocabs.map((vocab,i)=>{
    return <ItemVocab key={i} vocabs={vocab} />
  })
}

  render() {
   const {vocabs}= this.props
  
    return (
        <View>
          {this.VocabItem(vocabs)}
        </View>
      );
     
  }
}
function MapStateToprops({vocabs}){
  return {vocabs:vocabs}
}
export default connect(MapStateToprops,{fetch_vocab})(ListVocab);

