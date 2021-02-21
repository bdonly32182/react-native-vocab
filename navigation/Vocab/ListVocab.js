import React, { Component } from 'react';
import { View, TextInput,SectionList,SafeAreaView ,StyleSheet} from 'react-native';
import {connect } from 'react-redux'
import {fetch_vocab} from '../../Action/VocabAction'
import ItemVocab from './ItemVocab';

class ListVocab extends Component {
  constructor(props) {
    super(props);
    this.state={
      search:''
    }
  }
   
  
async componentDidMount (){
  const { category} =await this.props.route.params
    this.props.fetch_vocab(category)
}
VocabItem(vocabs=[]){
  let filterVocabs = vocabs.filter(vocab=>vocab.word.toLowerCase().indexOf(this.state.search.toLocaleLowerCase())!==-1);
  console.log(filterVocabs);
  return filterVocabs.map((vocab,i)=>{
    return <ItemVocab key={i} vocabs={vocab} />
  })
}

  render() {
   const {vocabs}= this.props
  
    return (
        <View>
          <TextInput onChangeText={text=>this.setState({search:text})} value={this.state.search}
          placeholder="ค้นหาคำศัพท์"
          />
          {this.VocabItem(vocabs)}
        </View>
      );
     
  }
}
function MapStateToprops({vocabs}){
  return {vocabs:vocabs}
}
export default connect(MapStateToprops,{fetch_vocab})(ListVocab);

