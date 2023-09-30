import { axiosInstance } from '../axios';

interface CredentialsType {
  username: string;
  password: string;
}

export async function registerService(values: CredentialsType) {
  return await axiosInstance
    .post('/register.php', {
      username: values.username,
      password: values.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
}
