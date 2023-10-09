import React from "react";
import {
  View,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Card } from "@rneui/themed";

import mainImage from "../../assets/main.jpg";
import { aduino } from "../../utils/axios/axios";
{
  /* <Button
            title="통신 테스트"
            // 다른 페이지로 이동
            onPress={() => {
              //const response = axios.get(url);

              const response = aduino.get("/test");
              response.then((response) => {
                console.log(response.data);
              });
            }}
          /> */
}
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/assets/main/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView style={styles.viewRoot}>
          <View style={styles.viewWrap}>
            <View style={styles.viewImgWrap}>
              <View style={styles.titleTextWrap}>
                <Text style={styles.titleText}>짱깸뽀 1번 오락기</Text>
              </View>
              <Image
                style={styles.viewImg}
                source={require("/assets/game.png")}
              />
              <View style={styles.BtnWrap}>
                <Pressable
                  style={styles.Btn}
                  // 다른 페이지로 이동
                  onPress={() => navigation.navigate("Play")}
                >
                  <Text style={styles.BtnText}>PLAY</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.viewWrap}>
            <View style={styles.viewImgWrap}>
              <View style={styles.titleTextWrap}>
                <Text style={styles.titleText}>짱깸뽀 2번 오락기</Text>
              </View>
              <Image
                style={styles.viewImg}
                source={require("/assets/game.png")}
              />
              <View style={styles.BtnWrap}>
                <Pressable
                  style={styles.Btn}
                  // 다른 페이지로 이동
                  onPress={() => navigation.navigate("Play")}
                >
                  <Text style={styles.BtnText}>PLAY</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.viewWrap}>
            <View style={styles.viewImgWrap}>
              <View style={styles.titleTextWrap}>
                <Text style={styles.titleText}>짱깸뽀 3번 오락기</Text>
              </View>
              <Image
                style={styles.viewImg}
                source={require("/assets/game.png")}
              />
              <View style={styles.BtnWrap}>
                <Pressable
                  style={styles.Btn}
                  // 다른 페이지로 이동
                  onPress={() => navigation.navigate("Play")}
                >
                  <Text style={styles.BtnText}>PLAY</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  viewRoot: {
    paddingHorizontal: 40,
  },
  viewWrap: {
    width: "100%",
    paddingVertical: 40,
    borderRadius: 15,
    backgroundColor: "#00000022",
    //backgroundColor: "#ffffff1f",
    marginTop: 40,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  titleTextWrap: {
    backgroundColor: "#7a3700",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  titleText: {
    textAlign: "center",
    fontSize: 30, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  viewImgWrap: {
    alignItems: "center",
  },
  viewImg: {
    width: 900,
    height: 400,
  },
  Btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#25a000",
    width: 315,
  },
  BtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  BtnWrap: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});

export default Home;
