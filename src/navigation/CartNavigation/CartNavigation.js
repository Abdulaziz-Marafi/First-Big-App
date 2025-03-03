import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Cart from "../../../screens/Cart/Cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigation;

const styles = StyleSheet.create({});
