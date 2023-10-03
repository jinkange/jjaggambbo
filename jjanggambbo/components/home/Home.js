import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';

import mainImage from '../../assets/main.jpg';
import { aduino } from '../../utils/axios/axios';

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

      <Card containerStyle={{ height: 400 }}>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={mainImage}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    <View>
    <Card containerStyle={{ height: 400 }}>
      <Card.Title>짱깸뽀 2번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={mainImage}
          />
      <Card.Divider />
      <Button
        title='PLAY'
				// 다른 페이지로 이동
        onPress={() => navigation.navigate('Play')}/>
      </Card>
    </View>
    <View>
      <Card containerStyle={{ height: 400 }}>
      <Card.Title>짱깸뽀 1번 기계</Card.Title>
      <Card.Divider />
      <Card.Image
            style={{ padding: 0 }}
            source={mainImage}
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
            source={mainImage}
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
            source={mainImage}
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