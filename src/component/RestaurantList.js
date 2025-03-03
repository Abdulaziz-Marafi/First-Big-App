import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import { getAllRestaurants } from "../api/food.js";
import { useQuery } from "@tanstack/react-query";

const RestaurantList = ({ selectedCategory }) => {
  const { data: restaurants } = useQuery({
    queryKey: ["getRestaurants"],
    queryFn: () => getAllRestaurants(),
  });

  const filteredRestaurants = selectedCategory
    ? restaurants?.filter(
        (restaurant) => restaurant.category === selectedCategory
      )
    : restaurants;

  const restaurantList = filteredRestaurants?.map((restaurant) => (
    <RestaurantCard
      key={restaurant._id}
      name={restaurant.name}
      image={restaurant.image}
      rating={restaurant.rating}
      deliveryTime={restaurant.deliveryTime}
      id={restaurant._id}
    />
  ));

  return (
    <ScrollView
      style={{
        width: "100%",
        paddingTop: 10,
        height: "100%",
      }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        paddingBlockEnd: 80,
      }}
    >
      {restaurantList}
    </ScrollView>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({});
