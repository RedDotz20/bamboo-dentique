import { axiosInstance } from '../axios';

export async function deleteAccountService() {
  return await axiosInstance
    .delete(
      '/register.php'
      // {
      //   data: {
      //     username: values.username,
      //     password: values.password,
      //   },
      // }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
}
