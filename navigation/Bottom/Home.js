import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render()
  
   {

    const {navigate} = this.props.navigation

    return (
      <View>
        <Text> Home </Text>
        <Button title="homevocab" onPress={()=> navigate('HomeVocab')}></Button>
        <Button title="homeAnswer" onPress={()=>navigate('HomeAnswer')}></Button>
      </View>
    );
  }
}

export default Home;
