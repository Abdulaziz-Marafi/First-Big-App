import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";

import { register } from "../../src/api/auth";
import * as ImagePicker from "expo-image-picker";
import UserContext from "../../src/context/UserContext";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      alert("Registration successful");
      setIsAuthenticated(true);
    },
    onError: (error) => {
      alert("Registration failed");
      console.log(error);
    },
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log(userInfo);
    mutate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C14600"
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, username: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#C14600"
        secureTextEntry
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, password: value });
        }}
      />
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          pickImage();
        }}
      >
        <Text
          style={{
            color: "#FF9D23",
            fontSize: 16,
            marginEnd: 10,
            fontWeight: "bold",
          }}
        >
          Upload Profile Image
        </Text>
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.registerText}>
          Already a registered user?{" "}
          <Text style={styles.registerLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D0AC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#C14600",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: "#C14600",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: "#FF9D23",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    color: "#C14600",
    fontSize: 16,
    marginTop: 8,
  },
  registerLink: {
    color: "#FF9D23",
    fontWeight: "bold",
  },
});
