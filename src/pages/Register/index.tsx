import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	IconButton,
	InputAdornment,
	TextField,
	Typography,
	Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;
type FormEventType = React.FormEvent<HTMLFormElement>;

export default function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleInputChange = (event: ChangeEventType) => {
		const { name, value } = event.target;
		setLoginData({ ...loginData, [name]: value });
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (event: FormEventType) => {
		event.preventDefault();
	};

	return (
		<section className="grid place-items-center h-screen bg-[#caa67d]">
			<div className="bg-white p-4 h-96 w-96">
				<form
					onSubmit={handleSubmit}
					className="h-full flex flex-col "
				>
					<Typography
						variant="h4"
						className="font-semiBold"
					>
						Ready to dive in?
					</Typography>
					<Typography
						variant="h5"
						className="font-semiBold"
					>
						Register Here,
					</Typography>

					<TextField
						size="medium"
						margin="normal"
						required
						fullWidth
						label="New Username"
						variant="outlined"
						name="username"
						value={loginData.username}
						onChange={handleInputChange}
					/>
					<TextField
						size="medium"
						required
						fullWidth
						label="New Password"
						type={showPassword ? 'text' : 'password'}
						variant="outlined"
						value={loginData.password}
						name="password"
						onChange={handleInputChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={togglePasswordVisibility}
										edge="end"
									>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<div className="flex flex-col gap-1 mt-auto">
						<Button
							fullWidth
							type="submit"
							variant="contained"
							color="primary"
						>
							Join Us Now
						</Button>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={() => navigate('/login')}
						>
							Return to Login
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
