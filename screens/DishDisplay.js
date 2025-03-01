import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const DishDisplay = ({ route }) => {
  const { dish } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.dishImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.dishDescription}>{dish.description}</Text>
        <View style={styles.separator} />
        <View style={styles.textRow}>
          <Text style={styles.dishPrice}>${dish.price}</Text>
        </View>
      </View>
      <View style={styles.flexSpacer} />
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D0AC",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  dishImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignItems: "center",
  },
  dishName: {
    color: "#C14600",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dishDescription: {
    color: "#C14600",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#FF9D23",
    width: "80%",
    marginVertical: 10,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dishPrice: {
    color: "#FF9D23",
    fontSize: 20,
    fontWeight: "bold",
  },
  dishRating: {
    color: "#FF9D23",
    fontSize: 20,
    fontWeight: "300",
  },
  flexSpacer: {
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: "#FF9D23",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
