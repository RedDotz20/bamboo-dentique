import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

import Styles from './register.module.css';

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
		//TODO: Add Register logic
		console.log(loginData);
	};

	return (
		<section className={Styles.registerWrapper}>
			<div className={Styles.registerContainer}>
				<Form onSubmit={handleSubmit}>
					<div>
						<h3>Ready to dive in?</h3>
						<h3>Register here</h3>
					</div>
					<Form.Group controlId="formUsername">
						<Form.Label>New Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your username"
							name="username"
							value={loginData.username}
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId="formPassword">
						<Form.Label>New Password</Form.Label>

						<div className="position-relative">
							<Form.Control
								type={showPassword ? 'text' : 'password'}
								name="password"
								placeholder="Enter password"
								value={loginData.password}
								onChange={handleInputChange}
								required
							/>
							<Button
								variant="passwordControl"
								onClick={togglePasswordVisibility}
								className="position-absolute top-50 translate-middle-y end-0"
							>
								{showPassword ? <EyeFill /> : <EyeSlashFill />}
							</Button>
						</div>
					</Form.Group>

					<div className={Styles.buttonGroup}>
						<Button
							variant="dark"
							type="submit"
						>
							JOIN US NOW
						</Button>
						<Button
							variant="dark"
							onClick={() => navigate('/login')}
						>
							RETURN TO LOGIN
						</Button>
					</div>
				</Form>
			</div>
		</section>
	);
}
