import api from "./index";

export const getResume = (params) => api.post("/resume/get_assume", params);

export const updateResume = (params) =>
  api.post("/resume/update_resume", params);

export const getResumeList = (params) =>
  api.get("/resume/get_assume_list", { params });
