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
          backgroundColor: "#000",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="MenuDisplay"
        component={MenuDisplay}
        options={{
          title: "Menu",
        }}
      />
      <Stack.Screen
        name="DishDisplay"
        component={DishDisplay}
        options={{
          title: "Dish",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
