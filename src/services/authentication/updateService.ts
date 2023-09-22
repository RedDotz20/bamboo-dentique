import { axiosInstance } from '../axios';

interface UserType {
  currentUsername: string;
  newUsername?: string;
  currentPassword?: string;
  newPassword?: string;
}

export async function updateService(values: UserType) {
  return await axiosInstance
    .post('/login.php', {
      current_username: values.currentUsername,
      new_username: values.newUsername || null,
      current_password: values.currentPassword || null,
      new_password: values.newPassword || null,
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}
