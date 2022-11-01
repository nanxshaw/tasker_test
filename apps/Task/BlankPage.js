import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BlankPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>Page is Blank</Text>
      </View>
    );
  }
}

export default BlankPage;
