import axios from 'axios'
import * as process from 'node:process'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gửi yêu cầu để lấy refresh token
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`, {
          token: localStorage.getItem('refreshToken'),
        });

        // Lưu lại token mới
        localStorage.setItem('accessToken', data.accessToken);

        // Gửi lại yêu cầu gốc với token mới
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        // Xử lý khi refresh token cũng thất bại (ví dụ: redirect đến trang đăng nhập)
      }
    }

    return Promise.reject(error);
  }
);

export default api;
