import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FoodCategoryList from "../src/component/FoodCategoryList";
import RestaurantList from "../src/component/RestaurantList";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <View style={styles.container}>
      <FoodCategoryList onCategorySelect={handleCategorySelect} />
      <RestaurantList selectedCategory={selectedCategory} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5D0AC",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
