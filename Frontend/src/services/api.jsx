import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getTasks = () => {
  return api.get("/get_tasks/");
};

export const createTasks = (task) => {
  return api.post("/create_tasks", task);
};
export const deleteTask = (taskId) => {
  return api.delete(`/delete_tasks/${taskId}`);
};

export const updateTask = (taskId) => {
  return api.put(`/update_tasks/${taskId}`);
};

export default api;
