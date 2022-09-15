import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api/v1`,
});

axiosInstance.interceptors.request.use((request) => {
  request.headers.authorization = `${'Bearer' + ' '}${JSON.parse(
    localStorage.getItem('token'),
  )}`;
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const history = useNavigate();

    if (error.response.status === 401) {
      localStorage.removeItem('token');
      history('/member/signIn');
      // window.location.href = '/member/signIn';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
