import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { ADD_TASKER, DELETE_TASKER, EDIT_TASKER } from '../redux/actions/action';

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null
    };
  }

  componentDidMount() {
    const { type, item } = this.props.route.params;
    if (type == 'edit') {
      this.setState({
        task: item.task
      })
    }
  }

  save = () => {
    const { type, item } = this.props.route.params;
    if (type == 'edit') {
      this.props.edit_task(this.state.task, item.id);
    } else {
      this.props.add_task(this.state.task);
    }
    this.props.navigation.pop();
  }

  delete = () => {
    const { item } = this.props.route.params;
    this.props.delete_task(item.id);
    this.props.navigation.pop();
  }

  render() {
    const { type } = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.tx}>Form Task</Text>
        <TextInput
          style={styles.in}
          placeholder="Project Name"
          onChangeText={(task) => this.setState({ task })}
          value={this.state.task}
        />
        <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={() => this.save()} >
          <Text style={{ color: "#FFF", fontWeight: "bold" }}>Save</Text>
        </TouchableOpacity>
        {
          type == 'edit' ?
            <TouchableOpacity style={styles.btn_del} activeOpacity={0.7} onPress={() => this.delete()} >
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>Delete</Text>
            </TouchableOpacity>
            :
            null
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
  tx: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 20
  },
  in: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderRadius: 10
  },
  btn: {
    backgroundColor: "#1E90FF",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  btn_del: {
    backgroundColor: "#DB7093",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    marginBottom: 10
  },
});

const mapStateToProps = (state) => ({ data: state.data })

const mapDispatchToProps = (dispatch) => ({
  add_task: (body) => {
    dispatch(ADD_TASKER(body))
  },
  edit_task: (body, id) => {
    dispatch(EDIT_TASKER(body, id))
  },
  delete_task: (id) => {
    dispatch(DELETE_TASKER(id))
  }
})

const connectComponent = connect(mapStateToProps, mapDispatchToProps)
export default connectComponent(UpdateTask);
