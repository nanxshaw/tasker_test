import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import BlankPage from '../Task/BlankPage';
import Task from '../Task/Task';

const Tab = createBottomTabNavigator();

class TabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#333',
          tabBarActiveBackgroundColor: '#FFF',
          tabBarInactiveTintColor: '#CCC',
          tabBarInactiveBackgroundColor: '#FFF',
        }}
        initialRouteName="Tasker"
      >
        <Tab.Screen
          name="Tasker"
          component={Task}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarLabel: 'Tasks',
            tabBarIcon: ({ focused, size }) => (
                <Icon name='book' type='font-awesome' size={size} color={focused ? '#333' : '#CCC'} />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={BlankPage}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarLabel: 'Projects',
            tabBarIcon: ({ focused, size }) => (
                <Icon name='shopping-cart' type='font-awesome' size={size} color={focused ? '#333' : '#CCC'} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={BlankPage}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarLabel: 'Chats',
            tabBarIcon: ({ focused, size }) => (
                <Icon name='messenger' size={size} color={focused ? '#333' : '#CCC'} />
            ),
          }}
        />
        <Tab.Screen
          name="Team"
          component={BlankPage}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarLabel: 'Team',
            tabBarIcon: ({ focused, size }) => (
                <Icon name='users' type='font-awesome' size={size} color={focused ? '#333' : '#CCC'} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={BlankPage}
          options={{
            unmountOnBlur: true,
            headerShown: false,
            tabBarLabel: 'Account',
            tabBarIcon: ({ focused, size }) => (
                <Icon name='user' type='font-awesome' size={size} color={focused ? '#333' : '#CCC'} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}



// const connectComponent = connect(mapStateToProps)
// export default connectComponent(TabNavigator);
export default TabNavigator;
