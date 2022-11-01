import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../component/Header';
const size = Dimensions.get('window').width;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info_task_chart: [
        {
          icon: <Icon name='timer' color="#FFE4C4" size={20} />,
          value: '08',
          desc: "Pending Tasks"
        },
        {
          icon: <Icon name='paste' type="font-awesome" color="#90EE90" size={20} />,
          value: '26',
          desc: "Active Projects"
        },
        {
          icon: <Icon name='folder' color="#DB7093" size={20} />,
          value: '89',
          desc: "Total Tasks"
        },
        {
          icon: <Icon name='person' color="#4169E1" size={20} />,
          value: '08',
          desc: "Teams"
        },
      ],
      info_task_list: [
        {
          desc: "Proposed",
          dot: "#4169E1",
          num_task: 4
        },
        {
          desc: "In Progress",
          dot: "#FFE4C4",
          num_task: 155
        },
        {
          desc: "Review",
          dot: "#FFC0CB",
          num_task: 12
        },
        {
          desc: "Completed",
          dot: "#32CD32",
          num_task: 9
        },
      ]
    };
  }

  renderGrid = (row) => {
    let item = row.item;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.push('ListTask')} activeOpacity={0.9} style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.padding_icon}>
            {item.icon}
          </View>
          <Text style={styles.tx_bold}>{item.value}</Text>
        </View>
        <Text style={styles.desc}>{item.desc}</Text>
      </TouchableOpacity>
    )
  }

  renderList = (key, i) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.push('ListTask')}  activeOpacity={0.9} key={i} style={styles.list}>
        <View style={styles.left_list}>
          <View style={[styles.dot, { backgroundColor: key.dot }]} />
          <Text style={styles.tx_bold}>{key.desc}</Text>
        </View>
        <View style={styles.right_list}>
          <Text style={styles.desc}>{key.num_task} Task</Text>
          <Icon name='chevron-right' size={25} color="#CCC" />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { info_task_chart, info_task_list } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View>
          <FlatList
            numColumns={2}
            data={info_task_chart}
            renderItem={this.renderGrid}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {
          info_task_list.map((key, i) => this.renderList(key, i))
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  grid: {
    width: (size / 2) - 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    margin: 10,
    padding: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  tx_bold: {
    fontWeight: "bold"
  },
  desc: {
    color: "#666",
  },
  padding_icon: {
    padding: 10
  },
  list: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    margin: 10,
    padding: 10
  },
  left_list:{
    width:"70%",
    flexDirection:"row",
    alignItems: "center"
  },
  right_list:{
    width:"30%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"flex-end"
  },
  dot:{
    borderRadius:6,
    height:12,
    width:12,
    marginRight:10
  }
})

export default Task;
