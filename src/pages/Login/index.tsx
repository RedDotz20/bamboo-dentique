import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  InputAdornment,
  TextField,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { loginService } from '../../services/authentication/loginService';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;
type FormEventType = React.FormEvent<HTMLFormElement>;

export default function LoginPage() {
  // const [isRemember, setIsRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/dashboard/home');
  }, [token]);

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

  const handleSubmit = async (event: FormEventType) => {
    event.preventDefault();
    const response = await loginService(loginData);
    if (response.success) {
      navigate('/dashboard/home');
    }
    console.log(response);
  };

  return (
    <section className="grid place-items-center h-screen bg-[#caa67d]">
      <div className="bg-white p-8 h-96 w-96">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col "
        >
          <Typography
            variant="h4"
            className="font-semiBold"
          >
            Hi there!
          </Typography>
          <Typography
            variant="h5"
            className="font-semiBold"
          >
            Let's get you started,
          </Typography>

          <TextField
            size="medium"
            margin="normal"
            required
            fullWidth
            label="Username"
            variant="outlined"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
          />
          <TextField
            size="medium"
            required
            fullWidth
            label="Password"
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
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <div className="flex gap-1">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
              >
                RETURN HOME
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => navigate('/register')}
              >
                CREATE ACCOUNT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
