import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import UserContext from "../../src/context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { deleteToken } from "../../src/api/storage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../src/api/auth";

const Profile = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await deleteToken();
    setIsAuthenticated(false);
    navigation.navigate("Login");
  };

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });
  console.log(data);
  const imageUrl = `https://react-native-food-delivery-be.eapi.joincoded.com/${data?.image}`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }} // Replace with actual user image
        style={styles.profileImage}
      />
      <Text style={styles.username}>{data?.username}</Text>
      {/* Replace with actual username */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D0AC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    color: "#C14600",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#FF9D23",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "90%",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
