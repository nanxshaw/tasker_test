import React, { Component } from 'react';
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
        <View style={styles.row_tx}>
          <Text style={styles.tx}>Tasker</Text>
        </View>
        <View style={styles.row_icon}>
          <View style={{ marginRight: 15 }}>
            <Icon name='search' type="font-awesome" size={18} />
          </View>
          <View style={{ marginRight: 15 }}>
            <Icon name='bell' type="font-awesome" size={18} />
          </View>
          <Image resizeMode="contain" resizeMethod="resize" source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' }} style={styles.icon} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  tx: {
    fontSize: 25,
    fontWeight:'bold',
  },
  row_tx: {
    alignItems: 'center',
    width: "40%"
  },
  row_icon: {
    alignItems: 'center',
    flexDirection: 'row',
    width: "60%",
    justifyContent: "flex-end"
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 20
  },
})

export default Header;
