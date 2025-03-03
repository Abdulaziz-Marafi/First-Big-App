import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import CartContext from "../../src/context/CartContext";
import CartItem from "../../src/component/CartComponents/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartList}>
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D0AC",
    padding: 20,
  },
  cartList: {
    flex: 1,
  },
  totalContainer: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  totalText: {
    color: "#C14600",
    fontSize: 24,
    fontWeight: "bold",
  },
});
