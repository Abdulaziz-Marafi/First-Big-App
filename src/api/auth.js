import instance from ".";
import { setToken } from "./storage";

const register = async (userInfo, image) => {
  const formData = new FormData();

  for (key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  formData.append("image", {
    name: "image.jpeg",
    type: "image/jpeg",
    uri: image,
  });
  const response = await instance.post("/auth/register", formData);

  console.log(response);

  setToken(response.data.token);

  return response.data;
};

const login = async (userInfo) => {
  const response = await instance.post("auth/login", {
    ...userInfo,
  });
  setToken(response.data.token);

  return response.data;
};

const getProfile = async () => {
  const response = await instance.get("/auth/profile");
  return response.data;
};

export { register, login, getProfile };
