// Page1.js
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

const Stack = createStackNavigator();

const Shop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

const ShopMain = () => {
  return (
    <View>
      <Text>shopMain Content</Text>
      {/* 다른 내용 추가 */}
    </View>
  );
}

export default Shop;