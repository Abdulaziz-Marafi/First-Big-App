import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../../screens/Authentication/Login";
import Register from "../../../screens/Authentication/Register";

const Stack = createNativeStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FF9D23",
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
