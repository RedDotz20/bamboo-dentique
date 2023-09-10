import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import Styles from './login.module.css';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;
type FormEventType = React.FormEvent<HTMLFormElement>;

export default function LoginPage() {
	const [isRemember, setIsRemember] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});
	const handleInputChange = (event: ChangeEventType) => {
		const { name, value } = event.target;
		setLoginData({ ...loginData, [name]: value });
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleCheckboxChange = (event: ChangeEventType) => {
		setIsRemember(event.target.checked);
	};

	const handleSubmit = (event: FormEventType) => {
		event.preventDefault();
		//TODO: Add login logic
		console.log(loginData);
	};

	return (
		<section className={Styles.loginWrapper}>
			<div className={Styles.loginContainer}>
				<Form
					onSubmit={handleSubmit}
					className={Styles.formGroup}
				>
					<div>
						<h2>Hi there!</h2>
						<h3>Let's get you started,</h3>
					</div>

					<Form.Group
						controlId="formUsername"
						className={Styles.inputGroup}
					>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							name="username"
							placeholder="Enter username"
							value={loginData.username}
							onChange={handleInputChange}
							required
						/>
					</Form.Group>

					<Form.Group
						controlId="formPassword"
						className={Styles.inputGroup}
					>
						<Form.Label>Password</Form.Label>
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
								variant="outline-secondary"
								onClick={togglePasswordVisibility}
								className="position-absolute top-50 translate-middle-y end-0"
							>
								{showPassword ? 'Hide' : 'Show'}
							</Button>
						</div>
					</Form.Group>

					<Form.Group
						controlId="rememberMe"
						className={Styles.inputGroup}
					>
						<Form.Check
							type="checkbox"
							label="Remember me"
							checked={isRemember}
							onChange={handleCheckboxChange}
						/>
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
					>
						SIGN IN
					</Button>
				</Form>
			</div>
		</section>
	);
}
