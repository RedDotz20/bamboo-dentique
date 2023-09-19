import { axiosInstance } from '../axios';

interface UserType {
	userId: number;
}

export async function updateService(values: UserType) {
	return await axiosInstance
		.post('/login.php', {
			userId: values.userId,
		})
		.then((response) => console.log(response.data))
		.catch((error) => console.error(error));
}
