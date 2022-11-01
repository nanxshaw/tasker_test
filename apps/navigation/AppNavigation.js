import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateTask from '../Task/UpdateTask';
import TabNavigation from './TabNavigation';
import ListTask from '../Task/ListTask';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ListTask" component={ListTask} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateTask" component={UpdateTask}
          options={{
            title: 'Form Task'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
