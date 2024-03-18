import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {

   /* if (error.response.status === 401) {
      const cookieStore = cookies();
      const refresh_token = cookieStore.get('refresh_token');

      try {
        const newAccessToken = await refreshToken();
        // Retry the original request with the new token
        const originalRequest = error.config;
        // originalRequest.headers.Authorization = `Bearer ${newAccessToken.token}`;
        return await axios(originalRequest);
      } catch (error_1) {
        // Handle refresh token error or redirect to login
        throw error_1;
      }
    }*/
    return Promise.reject(error);
  }
);

async function refreshToken(): Promise<any> {
  try {
    const response = await axios.post('/v1/auth/access-token', null, {
      withCredentials: true
    });

    return response.data; // Assuming response contains the new access token
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error; // Propagate error to caller
  }
}

export default axiosInstance;
