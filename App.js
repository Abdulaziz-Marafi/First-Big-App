import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
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
