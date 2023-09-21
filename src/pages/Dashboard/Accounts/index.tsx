import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;
type FormEventType = React.FormEvent<HTMLFormElement>;

export default function Accounts() {
	const [showEdit, setShowEdit] = useState(false);
	const [userData, setUserData] = useState({
		currentPassword: '',
		newPassword: '',
		newUsername: '',
	});

	const username = 'admin';

	const toggleEdit = () => setShowEdit(!showEdit);

	const handleChanges = (event: ChangeEventType) => {
		const { name, value } = event.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (event: FormEventType) => {
		event.preventDefault();
		// loginService(userData);
	};

	return (
		<section>
			<div className="flex gap-4 items-center mb-8">
				<AccountCircleIcon style={{ fontSize: 120 }} />
				<div>
					<h1 className="text-3xl mb-1">Account Information</h1>
					<h2 className="text-2xl font-bold mb-2">Username: {username}</h2>
					<Stack
						spacing={2}
						direction="row"
					>
						<Button
							onClick={() => toggleEdit()}
							variant="contained"
							style={{ fontFamily: 'Quicksand-Bold' }}
						>
							Edit Account
						</Button>
					</Stack>
				</div>
			</div>

			{showEdit && (
				<form
					onSubmit={handleSubmit}
					className="flex gap-2 flex-col w-[420px] p-4 border-[#caa67d] border-2 rounded-xl"
				>
					<h1 className="mb-4 font-bold">Edit Your Details</h1>

					<TextField
						sx={{ mb: 2 }}
						// variant="standard"
						label="New Username"
						name="newUsername"
						defaultValue=""
						onChange={handleChanges}
					/>

					<h1 className="mb-4 font-bold">Change Your Password</h1>

					<TextField
						// variant="standard"
						label="Current Password"
						name="currentPassword"
						defaultValue=""
						onChange={handleChanges}
					/>

					<TextField
						// variant="standard"
						label="New Password"
						name="newPassword"
						defaultValue=""
						onChange={handleChanges}
					/>

					<Stack
						mt={4}
						spacing={2}
						direction="row"
					>
						<Button
							onClick={() => setShowEdit(false)}
							className="w-full"
							variant="outlined"
							color="error"
							style={{ fontFamily: 'Quicksand-Bold' }}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							className="w-full"
							variant="contained"
							color="success"
							style={{ fontFamily: 'Quicksand-Bold' }}
						>
							Apply Changes
						</Button>
					</Stack>
				</form>
			)}
		</section>
	);
}
