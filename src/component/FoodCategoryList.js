import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { getAllCategories } from "../api/food.js";
import FoodCategory from "./FoodCategory";
import { useQuery } from "@tanstack/react-query";

const FoodCategoryList = ({ onCategorySelect, selectedCategory }) => {
  const { data: categories } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getAllCategories(),
  });

  const handleCategoryPress = (categoryName) => {
    if (selectedCategory === categoryName) {
      onCategorySelect(null); // Deselect category
    } else {
      onCategorySelect(categoryName); // Select category
    }
  };

  const restaurantView = categories?.map((category) => {
    const isSelected = selectedCategory === category.categoryName;
    return (
      <TouchableOpacity
        key={category._id}
        onPress={() => handleCategoryPress(category.categoryName)}
      >
        <FoodCategory
          image={category.image}
          name={category.name}
          isSelected={isSelected}
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
