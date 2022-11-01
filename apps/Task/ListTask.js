import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Header from '../component/Header';

class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_task: [
                {
                    icon: 'list',
                    value: 'To do',
                    status: true
                },
                {
                    icon: 'clipboard',
                    value: 'In Progress',
                    status: false
                },
                {
                    icon: 'clock',
                    value: 'Completed',
                    status: false
                },
            ],
            data: []
        };
    }

    componentDidMount() {
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                data: this.props.data
            })
        });
        return unsubscribe;
    }

    renderMenu = (key, i) => {
        return (
            <View key={i} style={[styles.menu, { backgroundColor: key.status == true ? '#1E90FF' : '#FFF' }]}>
                <Icon name={key.icon} type='font-awesome-5' size={15} color={key.status == true ? '#FFF' : '#1E90FF'} />
                <Text style={{ marginLeft: 10, fontWeight: "bold", color: key.status == true ? '#FFF' : '#333' }}>{key.value}</Text>
            </View>
        )
    }

    renderList = (item) => {
        return (
            <TouchableOpacity activeOpacity={.7} onPress={() => this.props.navigation.push('UpdateTask', { type: 'edit', item: item.item })} style={styles.list}>
                <View>
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.item.task}</Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <View style={{ alignSelf: "flex-end", justifyContent: "center", alignItems: "center", backgroundColor: "#FFB6C1", padding: 5, borderRadius: 10, width: 80 }}>
                                <Text style={{ color: "#F08080", fontWeight: "bold", fontSize: 12 }}>Medium</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: "#666" }}>At Prospyr we are looking to revolutionize patient</Text>

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "row", marginRight: 10 }}>
                            <Icon name='timer' type='ionicon' color='#1E90FF' size={15} />
                            <Text style={{ fontSize: 12, color: "#666", marginLeft:5 }}>08.00 AM - 05.30 PM</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name='calendar' type='font-awesome-5' color='#1E90FF' size={15} />
                            <Text style={{ fontSize: 12, color: "#666", marginLeft:5 }}>Thus 30 Dec</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { menu_task, data } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <View style={{ backgroundColor: "#F0F8FF" }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        pagingEnabled
                    >
                        {
                            menu_task.map((key, i) => this.renderMenu(key, i))
                        }
                    </ScrollView>
                </View>
                <FlatList
                    data={data}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('UpdateTask', { type: 'add' })}
                    style={styles.btn_circle}
                >
                    <Icon name="plus" type='font-awesome-5' size={15} color="#FFF" />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    menu: {
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        flexDirection: "row",
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: "#CCC",
        margin: 10,
        padding: 10,
        backgroundColor: "#F0F8FF"
    },
    btn_circle: {
        backgroundColor: "#1E90FF",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
    }
})

const mapStateToProps = (state) => ({
    data: state.data,
})

const connectComponent = connect(mapStateToProps)
export default connectComponent(ListTask)