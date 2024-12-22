import api from "./index";

export const getResume = (params) => api.get("/jobs/get_job_list", { params });
