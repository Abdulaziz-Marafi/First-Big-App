import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import restaurants from "../data/restaurants";

const RestaurantList = ({ selectedCategory }) => {
  const filteredRestaurants = selectedCategory
    ? restaurants.filter(
        (restaurant) => restaurant.category === selectedCategory
      )
    : restaurants;

  const restaurantList = filteredRestaurants.map((restaurant) => (
    <RestaurantCard
      key={restaurant.id}
      name={restaurant.name}
      image={restaurant.image}
      rating={restaurant.rating}
      deliveryTime={restaurant.deliveryTime}
      id={restaurant.id}
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
        paddingBlockEnd: 10,
      }}
    >
      {restaurantList}
    </ScrollView>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({});
