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
  const res = await instance.post("/auth/register", formData);

  console.log(res);

  setToken(res.data.token);

  return res.data;
};

const login = async (userInfo) => {
  const response = await instance.post("auth/login", {
    ...userInfo,
  });
  setToken(res.data.token);

  return response.data;
};

export { register, login };
