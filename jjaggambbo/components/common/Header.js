// Common/Header.js
import React from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import { Card,Chip  } from '@rneui/themed';

const Header = () => {
  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      flexDirection:'row',
      width:'100%'
    },
  });


  return (
    <View  style={styles.contentView}>
      <Chip 
      containerStyle={{
        width: 200,
        iconPosition : "left"
      }}><Text>진민강</Text></Chip>
      <Chip 
      containerStyle={{
        width: 200,
        iconPosition : "right"
      }}><Text>코인 : 100</Text></Chip>
      <Chip
      containerStyle={{
        width: 200,
        iconPosition : "right"
      }}><Text>티켓 : 100</Text></Chip> 
    </View>
  );
}

export default Header;
