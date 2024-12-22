import axios from "axios";

// 创建 Axios 实例
const instance = axios.create({
  baseURL: "http://49.51.230.251:211",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送前做一些处理，例如添加 Token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.sid = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 错误处理
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default instance;
