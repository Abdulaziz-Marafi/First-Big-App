import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import UserContext from "./src/context/UserContext";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";
import { getToken } from "./src/api/storage";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = new QueryClient();

  const checkToken = async () => {
    // get the token
    const token = await getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    checkToken();
  });

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <UserContext.Provider
              value={{ isAuthenticated, setIsAuthenticated }}
            >
              <CartProvider>
                {isAuthenticated ? <MainNavigation /> : <AuthNav />}
              </CartProvider>
            </UserContext.Provider>
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
