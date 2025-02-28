import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import restaurants from "../data/restaurants.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({ name, image, rating, deliveryTime, id }) => {
  const navigation = useNavigation();

  return (
    // Add Navigation
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MenuDisplay", { id: id });
      }}
    >
      <View style={styles.restaurantCard}>
        <Image
          source={{ uri: image }}
          style={{
            width: 275,
            height: 200,
            borderRadius: 10,
          }}
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: 280,
            marginTop: 10,
          }}
        >
          <Text style={styles.mutedText}>
            {rating} <AntDesign name="star" size={18} color="yellow" />
          </Text>
          <Text style={styles.mutedText}>{deliveryTime} delivery time</Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            marginTop: 10,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  mutedText: {
    color: "#F9F5EC",
    fontSize: 15,
  },
  restaurantCard: {
    backgroundColor: "#FF9D23",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
    width: "75%",
    margin: 10,
  },
});
