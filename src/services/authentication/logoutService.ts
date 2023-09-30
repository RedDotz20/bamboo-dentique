import { axiosInstance } from '../axios';

export async function logoutService() {
  const accessToken = localStorage.getItem('access_token');

  return await axiosInstance
    .post('/logout.php', { access_token: accessToken })
    .then((response) => {
      if (response.status === 200) {
        localStorage.clear();
      }
      return response.data;
    })
    .catch((error) => console.error(error));
}
