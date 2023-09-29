import { axiosInstance } from '../axios';

export async function deleteAccountService() {
  const usersId = localStorage.getItem('usersid');

  return await axiosInstance
    .delete(`/register.php?usersid=${usersId}`)
    .then((response) => {
      if (response.status === 200) {
        localStorage.clear();
      }
      return response.data;
    })
    .catch((error) => console.error(error));
}
