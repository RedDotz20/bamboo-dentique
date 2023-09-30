import { axiosInstance } from '../axios';

interface CredentialsType {
  username: string;
  password: string;
}

export async function loginService(values: CredentialsType) {
  return await axiosInstance
    .post('/login.php', {
      username: values.username,
      password: values.password,
    })
    .then((response) => {
      if (response.status === 200) {
        const { userId, username, access_token } = response.data;

        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
        localStorage.setItem('access_token', access_token);

        return response.data;
      }
    })
    .catch((error) => console.error(error));
}
