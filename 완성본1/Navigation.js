import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Login from './screens/login';
import Match from './screens/match';
import Profile from './screens/profile';
import Userinfo from './screens/userinfo';
import Map from './screens/map';


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Userinfo" component={Userinfo} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default Navigation;
