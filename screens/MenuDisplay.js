import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MenuItem from "../src/component/MenuItem";
import { useQuery } from "@tanstack/react-query";
import { getRestaurantById } from "../src/api/food";

const MenuDisplay = ({ route }) => {
  const { id } = route.params;
  console.log("ID is:" + id);
  //const selectedRes = restaurants.find((res) => res.id === id);
  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["getRestaurantById", id],
    queryFn: () => getRestaurantById(id),
  });
  const menuItems = restaurant?.items?.map((item) => {
    return (
      <MenuItem
        key={item._id}
        image={item.image}
        price={item.price}
        name={item.name}
        dish={item}
      />
    );
  });
  return (
    <View>
      <View
        style={{
          backgroundColor: "#C14600",
          //   borderRadius: 10,
          //   margin: 5,
          padding: 10,
        }}
      >
        <Image
          source={{
            uri: restaurant?.image,
          }}
          style={styles.menuDisplayImage}
        />
        <View style={styles.infoContainer}>
          <View style={styles.textRow}>
            <Text style={styles.menuText}>{restaurant?.name}</Text>
            <Text style={styles.menuText}>
              {restaurant?.rating}{" "}
              <AntDesign name="star" size={18} color="yellow" />
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.textRow}>
            <Text style={styles.menuText2}>
              <AntDesign name="clockcircle" size={24} color="#FF9D23" />{" "}
              {restaurant?.deliveryTime}
            </Text>
          </View>
        </View>
      </View>
      {/* Build Menu Scroll */}
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
        {/* Building Menu Item */}
        {/* <View style={styles.menuItem}>
          <Image
            source={{
              uri: restaurants[0].menuItems[0].image,
            }}
            style={styles.menuItemImage}
          />
          <View style={styles.menuItemTextContainer}>
            <Text style={styles.menuItemText}>
              {restaurants[0].menuItems[0].name}
            </Text>
            <Text style={styles.menuItemPrice}>
              {restaurants[0].menuItems[0].price} $
            </Text>
          </View>
        </View> */}
        {menuItems}
      </ScrollView>
    </View>
  );
};

export default MenuDisplay;

const styles = StyleSheet.create({
  menuDisplayImage: {
    width: "92%",
    height: 225,
    justifySelf: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#FF9D23",
    marginVertical: 5,
    width: "75%",
    justifyContent: "center",
    alignSelf: "center",
  },
  menuText: {
    color: "#FF9D23",
    fontSize: 20,
    fontWeight: "300",
    // textShadowColor: "#FF9D23",
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 1,
  },
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
