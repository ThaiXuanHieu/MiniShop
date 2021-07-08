import axios from "axios";

const baseUrl = "https://localhost:5001";

export const getAsync = async (url) => {
  const headers = await getHeaders();
  return axios.get(baseUrl + url, { headers });
};

export const postAsync = async (url, model) => {
  const headers = await getHeaders();
  return axios.post(baseUrl + url, model, { headers });
};

export const putAsync = async (url, model) => {
  const headers = await getHeaders();
  return axios.put(baseUrl + url, model, { headers });
};

export const deleteAsync = async (url) => {
  const headers = await getHeaders();
  return axios.delete(baseUrl + url, { headers });
};

const getTokenAsync = async () => {
  let token;
  await axios
    .post(baseUrl + "/api/Users/login", {
      email: "thaixuanhieu300698@gmail.com",
      password: "Abc@123",
      rememberMe: true,
    })
    .then((res) => {
      token = res.data.token;
    })
    .catch((error) => {
      console.log(error);
    });

  return token;
};

const getHeaders = async () => {
  var token = await getTokenAsync();
  return {
    Accept: "application/json",
    Authorization: "Bearer " + token,
  };
};
