import api from "./index";

// 用户登录
export const login = (data) => api.post("/account/login", data);

// 获取用户信息
export const getUserInfo = (params) => api.get("/account/get_info", { params });

// 用户注销
// export const logout = () => api.post('/auth/logout');

// create a account
export const createAccount = (params) =>
  api.post("/account/create_account", params);
