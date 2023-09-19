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
		.then((response) => console.log(response.data))
		.catch((error) => console.error(error));
}

export async function deleteAccountService(values: CredentialsType) {
	return await axiosInstance
		.delete('/register.php', {
			data: {
				username: values.username,
				password: values.password,
			},
		})
		.then((response) => console.log(response.data))
		.catch((error) => console.error(error));
}
