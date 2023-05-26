import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Login from './screens/login';
import Match from './screens/match';
import Profile from './screens/profile';
import Userinfo from './screens/userinfo';
import Review from './screens/review';
import Map from './screens/map';

const Stack = createStackNavigator();

// 스택 내비게이터를 구성하는 컴포넌트입니다.
function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Login" // 초기 라우트로 "Login" 화면을 설정합니다.
    >
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Match" component={Match} /> 
      <Stack.Screen name="Profile" component={Profile} /> 
      <Stack.Screen name="Userinfo" component={Userinfo} /> 
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Map" component={Map} /> 
    </Stack.Navigator>
  );
}

// 내비게이션 컴포넌트를 구성하는 함수형 컴포넌트입니다.
function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen /> 
    </NavigationContainer>
  );
}

export default Navigation;
