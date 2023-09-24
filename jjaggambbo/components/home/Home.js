import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import Play from '../play/Play';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Shop from '../shop/Shop';
import Mypage from '../mypage/Mypage';
import Setting from '../setting/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { Card,Chip  } from '@rneui/themed';
import axios from 'axios';
import aduino from '../../utils/axios/axios';

const Home = ({navigation}) => {
  

  return (
    <ScrollView >
    <View>
    <Button
        title='통신 테스트'
				// 다른 페이지로 이동
        onPress={() => {
          //const response = axios.get(url);
          const response = aduino.get('/test');
          response.then((response) => {
            console.log(response.data);
          })
          
        }}/>

      <Card>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
              '/jjaggambbo/assets/main.jpg',
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
      <Card.Title>짱깸뽀 2번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
              '/jjaggambbo/assets/main.jpg',
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
              '/jjaggambbo/assets/main.jpg',
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
                '/jjaggambbo/assets/main.jpg',
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
              '/jjaggambbo/assets/main.jpg',
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