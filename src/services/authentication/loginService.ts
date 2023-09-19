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
		.then((response) => console.log(response.data))
		.catch((error) => console.error(error));
}
