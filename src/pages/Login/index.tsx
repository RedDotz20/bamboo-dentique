import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import Styles from './login.module.css';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;
type FormEventType = React.FormEvent<HTMLFormElement>;

export default function LoginPage() {
	// const [isRemember, setIsRemember] = useState(false);
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

	// const handleCheckboxChange = (event: ChangeEventType) => {
	// 	setIsRemember(event.target.checked);
	// };

	const handleSubmit = (event: FormEventType) => {
		event.preventDefault();
	};

	return (
		<section className={Styles.loginWrapper}>
			<div className={Styles.loginContainer}>
				<Form onSubmit={handleSubmit}>
					<div>
						<h3>Hi there!</h3>
						<h3>Let's get you started,</h3>
					</div>
					<Form.Group controlId="formUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your username"
							name="username"
							value={loginData.username}
							onChange={handleInputChange}
						/>
					</Form.Group>

					<Form.Group controlId="formPassword">
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
								variant="passwordControl"
								onClick={togglePasswordVisibility}
								className="position-absolute top-50 translate-middle-y end-0"
							>
								{showPassword ? <EyeFill /> : <EyeSlashFill />}
							</Button>
						</div>
					</Form.Group>

					{/* <Form.Group controlId="formRememberMe">
						<Form.Check
							type="checkbox"
							label="Remember Me"
							name="rememberMe"
							checked={isRemember}
							onChange={handleCheckboxChange}
						/>
					</Form.Group> */}

					<div className={Styles.buttonGroup}>
						<Button
							variant="dark"
							type="submit"
						>
							SIGN IN
						</Button>
						<div>
							<Button
								variant="dark"
								onClick={() => navigate('/')}
							>
								RETURN HOME
							</Button>
							<Button
								variant="dark"
								onClick={() => navigate('/register')}
							>
								CREATE ACCOUNT
							</Button>
						</div>
					</div>
				</Form>
			</div>
		</section>
	);
}
