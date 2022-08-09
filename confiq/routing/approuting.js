// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../pages/home';
import Login from '../../pages/login';
import InnerCard from '../../pages/home/innercard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppRouting() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{title:"Sign UP "}} component={Login} />
        <Stack.Screen options={{title:"Hotel Mangement Systems"}} name="Home" component={Home} />
        <Stack.Screen options={{title:"Hotel Details"}} name="innercard" component={InnerCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <Tab.Navigator>
//          <Tab.Screen name="login" component={Login} />
//          <Tab.Screen name="Home" component={Home} />
//          <Tab.Screen name="innercard" component={InnerCard} />
// </Tab.Navigator>

export default AppRouting;
