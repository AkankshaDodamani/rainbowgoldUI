import axios from "axios";
import { store } from "../store"; 
import { updateAccessToken, logoutUser } from "../middleware/authSlice.js";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 

      try {
        const refreshToken = store.getState().auth.refreshToken;
        
        if (!refreshToken) {
            throw new Error("No refresh token available");
        }

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/refresh`, {
          token: refreshToken,
        });

        if (response.data.success) {
          const newAccessToken = response.data.accessToken;


          store.dispatch(updateAccessToken(newAccessToken));

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        store.dispatch(logoutUser()); 
        window.location.href = "/rainbow-admin"; 
        
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;