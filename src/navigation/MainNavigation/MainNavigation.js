import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNav from "../AuthNavigation/AuthNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import UserContext from "../../context/UserContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#C14600",
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#E5D0AC",
      }}
    >
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      {/* <Tab.Screen
        name="AuthNav"
        component={AuthNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Login",
        }}
      /> */}

      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
