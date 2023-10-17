// Page1.js
import React from "react";
import {View, Text, StyleSheet, Button, Platform} from "react-native";
//import { Card, Button } from 'react-native-elements';
import {createStackNavigator} from "@react-navigation/stack";
import WebView from "react-native-webview";
import {STREMING_URL} from "../../const/const";
import {Card, Chip} from "@rneui/themed";
import {Dimensions} from "react-native";
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

const Play = ({navigation}) => {
  return Platform.OS === "web" ? (
    <View>
      <View>
        <Card containerStyle={styles.card}>
          <Card.Title>짱깸뽀 1번 기계</Card.Title>
          <Card.Divider />
          {/* WebView를 사용하여 웹페이지를 표시 */}
          <iframe src={"http://27.124.206.159:200" + STREMING_URL} height={"400"} width={"100%"} />
          <Card.Divider />
          <Button title="PLAY" onPress={() => navigation.navigate("Play")} />
        </Card>
      </View>
      <View>
        <Text>별명/코인/티켓</Text>
      </View>
      <Button title="시작하기" />
      <Button title="나가기" onPress={() => navigation.navigate("Home")} />
    </View>
  ) : (
    <View>
      {/* <View>
      <Card containerStyle={styles.card}>
        <Card.Title>짱깸뽀 1번 기계</Card.Title>
        <Card.Divider />
        <WebView
          source={{ uri: ADUINO_CAMERA1_URL+STREMING_URL }} // 웹페이지의 URL을 설정
          style={styles.webview}
        />
        <Card.Divider />
        <Button
          title='PLAY'
          onPress={() => navigation.navigate('Play')}
        />
      </Card>
        </View>
      <View><Text>별명/코인/티켓</Text></View>
      <Button title='시작하기'/>
      <Button title='나가기' onPress={() => navigation.navigate('Home')}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: ScreenWidth,
    height: 400, // 카드의 높이 설정
  },
  webview: {
    flex: 1,
  },
});

export default Play;
