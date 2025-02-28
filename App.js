import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import restaurantCategories from "./src/data/restaurantCategories";
import FoodCategory from "./src/component/FoodCategory";
import Home from "./screens/Home";
import MenuDisplay from "./screens/MenuDisplay";
import DishDisplay from "./screens/DishDisplay";
import Register from "./screens/Authentication/Register";
import Login from "./screens/Authentication/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const queryClient = new QueryClient();
  // const foodTypes = restaurantCategories.map((category) => {
  //   <FoodCategory
  //     image={category.categoryImage}
  //     name={category.categoryName}
  //   />;
  // });
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            {/* <Home /> */}
            {/* <MenuDisplay /> */}
            {/* <DishDisplay /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <HomeNavigation /> */}
            <MainNavigation />
            {/* <AuthNav /> */}
          </QueryClientProvider>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D0AC",
  },
});
