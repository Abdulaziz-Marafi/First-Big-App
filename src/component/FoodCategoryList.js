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
import restaurantCategories from "../data/restaurantCategories.js";
import { useQuery } from "@tanstack/react-query";

const FoodCategoryList = () => {
  const { data: categories } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getAllCategories(),
  });
  const restaurantView = categories?.map((category) => {
    return (
      <TouchableOpacity
        key={category._id}
        onPress={() => onCategorySelect(category.categoryName)}
      >
        <FoodCategory image={category.image} name={category.name} />
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
