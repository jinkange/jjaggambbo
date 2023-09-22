import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './components/common/Header';

import Home from './components/home/Home';
import Play from './components/play/Play';
import Setting from './components/setting/Setting';
import Mypage from './components/mypage/Mypage';
import Shop from './components/shop/Shop';

const Tab = createBottomTabNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
       <Header title="공통 헤더" /> 
       <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home}/>
        {/* <Tab.Screen name="Play" component={Play} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Mypage" component={Mypage} />
        <Tab.Screen name="Shop" component={Shop} /> */}
        {/* 다른 화면들 추가 */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});