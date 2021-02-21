import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class HomeAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigate} = this.props.navigation

    return (
      <View>
        <Button title="Toeic" onPress={()=> navigate('ListAnswer',{category:'Toeic'})}></Button>
        <Button title="Toefl" onPress={()=> navigate('ListAnswer',{category:'Toefl'})}></Button>
        <Button title="Tu-gep" onPress={()=> navigate('ListAnswer',{category:'Tu-gep'})}></Button>
        <Button title="Cu-tep" onPress={()=> navigate('ListAnswer',{category:'Cu-tep'})}></Button>

      </View>
    );
  }
}

export default HomeAnswer;
