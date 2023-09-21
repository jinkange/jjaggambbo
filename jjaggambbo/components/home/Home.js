import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import Play from '../play/Play';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Shop from '../shop/shop';
import Mypage from '../mypage/Mypage';
import Setting from '../setting/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { Card,Chip  } from '@rneui/themed';

const Home = ({navigation}) => {
  return (
    <ScrollView >
    <View>
      <Card>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    <View>
      <Card>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    <View>
      <Card>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    <View>
      <Card>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    <View>
      <Card>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    </ScrollView>
  );
}

export default Home;