import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemTextContainer}>
        <Text style={styles.cartItemText}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      <View style={styles.cartItemActions}>
        <TouchableOpacity onPress={() => removeFromCart(item._id)}>
          <Text style={styles.cartItemActionText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => addToCart(item)}>
          <Text style={styles.cartItemActionText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cartItemImage: {
    width: 60,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  cartItemTextContainer: {
    flex: 1,
  },
  cartItemText: {
    color: "#C14600",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemPrice: {
    color: "#FF9D23",
    fontSize: 16,
    fontWeight: "300",
  },
  cartItemActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartItemActionText: {
    color: "#FF9D23",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  cartItemQuantity: {
    color: "#C14600",
    fontSize: 18,
    fontWeight: "bold",
  },
});
