import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FoodCategory from "./FoodCategory";
import restaurantCategories from "../data/restaurantCategories.js";

const FoodCategoryList = () => {
  const restaurantView = restaurantCategories.map((category) => {
    return (
      <TouchableOpacity
        key={category.id}
        onPress={() => onCategorySelect(category.categoryName)}
      >
        <FoodCategory
          image={category.categoryImage}
          name={category.categoryName}
        />
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView
      horizontal={true}
      style={{ width: "100%", paddingVertical: 10 }}
      contentContainerStyle={styles.scrollView}
    >
      {restaurantView}
    </ScrollView>
  );
};

export default FoodCategoryList;

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
});
