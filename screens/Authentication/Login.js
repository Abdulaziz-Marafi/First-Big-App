import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../src/api/auth";
import UserContext from "../../src/context/UserContext";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      alert("Login successful");
      setIsAuthenticated(true);
    },
    onError: (error) => {
      alert("Login failed");
      console.log(error);
    },
  });

  const navigation = useNavigation();
  const handleLogin = () => {
    console.log(userInfo);
    mutate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerText}>
          Already a registered user?{" "}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
