import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../../../screens/Home";
import MenuDisplay from "../../../screens/MenuDisplay";
import DishDisplay from "../../../screens/DishDisplay";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: true,
        tabBarStyle: {
          backgroundColor: "#FF9D23",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MenuDisplay" component={MenuDisplay} />
      <Stack.Screen name="DishDisplay" component={DishDisplay} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
