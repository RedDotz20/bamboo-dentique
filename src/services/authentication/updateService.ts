import { axiosInstance } from '../axios';

interface UserType {
  newUsername?: string;
  currentPassword: string;
  newPassword?: string;
}

export async function updateService(values: UserType) {
  const userId = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId') as string)
    : 0;

  return await axiosInstance
    .put('/update.php', {
      idusers: userId,
      new_username: values.newUsername,
      current_password: values.currentPassword,
      new_password: values.newPassword,
    })
    .then((response) => {
      // if (response.status === 200) {
      //   localStorage.setItem('username', response.data.newUsername);
      // }
      return response.data;
    })
    .catch((error) => console.error(error));
}
