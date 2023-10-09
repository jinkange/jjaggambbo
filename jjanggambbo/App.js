import React from "react";
import { Dimensions, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Play from "./components/play/Play";
import Setting from "./components/setting/Setting";
import Mypage from "./components/mypage/Mypage";
import Shop from "./components/shop/Shop";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome5Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const ScreenHeghit = Dimensions.get("window").height;

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TabNavi}
        options={{
          headerShown: true,
          header: () => <Header title="header" />,
        }}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const TabNavi = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="isv" size={24} />,
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="user" size={24} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="tool" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
