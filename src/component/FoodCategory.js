import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FoodCategory = ({ image, name }) => {
  return (
    <View style={styles.foodCategory}>
      <Image source={{ uri: image }} style={styles.foodCategoryImage} />
      <Text style={styles.foodCategoryText}>{name}</Text>
    </View>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  foodCategory: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#FF9D23",
    backgroundColor: "#FEF9E1",
    padding: 4,
    borderRadius: 10,
    width: "140",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    // height: 200,
  },
  foodCategoryText: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 3,

    // marginLeft: 20,
  },
  foodCategoryImage: {
    width: 45,
    height: 35,

    borderRadius: 10,
  },
});
