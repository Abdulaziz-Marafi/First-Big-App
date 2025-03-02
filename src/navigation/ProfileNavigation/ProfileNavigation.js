import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Profile from "../../../screens/Profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteToken } from "../../api/storage";
import UserContext from "../../context/UserContext";
const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                deleteToken();
                setIsAuthenticated(false);
                //navigation.navigate("Login");
              }}
            >
              <MaterialIcons name="logout" size={30} color="red" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
