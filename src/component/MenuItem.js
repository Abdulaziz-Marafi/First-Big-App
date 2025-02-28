import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ name, price, image, dish }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        navigation.navigate("DishDisplay", { dish: dish });
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.menuItemImage}
      />
      <View style={styles.menuItemTextContainer}>
        <Text style={styles.menuItemText}>{name}</Text>
        <Text style={styles.menuItemPrice}>{price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  menuText2: {
    color: "#FF9D23",
    fontSize: 20,
    fontWeight: "300",
  },
  menuItemImage: {
    width: 60,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  menuItemTextContainer: {
    flex: 1,
  },
  menuItemText: {
    color: "#C14600",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItemPrice: {
    color: "#FF9D23",
    fontSize: 16,
    fontWeight: "300",
  },
});
