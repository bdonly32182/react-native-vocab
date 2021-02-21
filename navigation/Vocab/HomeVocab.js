import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeVocab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Button title="Toeic" onPress={()=> navigate('ListVocab',{category:'Toeic'})}></Button>
        <Button title="Toeft" onPress={()=> navigate('ListVocab',{category:'Toeft'})}></Button>
        <Button title="Tu-gep" onPress={()=> navigate('ListVocab',{category:'Tu-gep'})}></Button>
        <Button title="Cu-tep" onPress={()=> navigate('ListVocab',{category:'Cu-tep'})}></Button>

      </View>
    );
  }
}

export default HomeVocab;
