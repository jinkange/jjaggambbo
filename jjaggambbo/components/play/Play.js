// Page1.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Play = ({navigation}) => {
  return (
    <View>
      <View>게</View>
      <View>별명/코인/티켓</View>
      <Button title='시작하기'/>
      <Button title='나가기' onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

export default Play;