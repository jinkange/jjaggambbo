// Common/Header.js
import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
      {/* 다양한 헤더 컨텐츠 추가 가능 */}
    </View>
  );
}

export default Header;
