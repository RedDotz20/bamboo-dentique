import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { updateService } from '../../../services/authentication/updateService';
import { deleteAccountService } from '../../../services/authentication/deleteService';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;
type FormEventType = React.FormEvent<HTMLFormElement>;

export default function Accounts() {
  const [currentUsername, setCurrentUsername] = useState(
    localStorage.getItem('username')
  );
  const [showEdit, setShowEdit] = useState(false);
  const [userData, setUserData] = useState({
    currentPassword: '',
    newPassword: '',
    newUsername: '',
  });

  useEffect(() => {
    if (currentUsername) {
      localStorage.setItem('username', currentUsername);
    }
  }, [currentUsername]);

  const toggleEdit = () => setShowEdit(!showEdit);
  const navigate = useNavigate();

  const handleChanges = (event: ChangeEventType) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const cancelChanges = () => {
    setUserData({
      currentPassword: '',
      newPassword: '',
      newUsername: '',
    });
    setShowEdit(false);
  };

  const handleEditSubmit = async (event: FormEventType) => {
    event.preventDefault();
    const response = await updateService(userData);
    if (response.success) {
      const updatedUsername = response.newUsername;
      setCurrentUsername(updatedUsername);
      console.log(response);
    }
  };

  const handleDelete = async () => {
    const response = await deleteAccountService();
    if (response.success) {
      navigate('/login');
    }
    console.log(response);
  };

  return (
    <section>
      <div className="flex gap-4 items-center mb-8">
        <AccountCircleIcon style={{ fontSize: 120 }} />
        <div>
          <h1 className="text-3xl mb-1">Account Information</h1>
          <h2 className="text-2xl font-bold mb-2">
            Username: {currentUsername}
          </h2>
          <div className="flex gap-4">
            <Stack
              spacing={2}
              direction="row"
            >
              <Button
                // disabled
                onClick={() => toggleEdit()}
                variant="contained"
                style={{ fontFamily: 'Quicksand-Bold' }}
              >
                Edit Account
              </Button>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
            >
              <Button
                onClick={handleDelete}
                variant="contained"
                color="error"
                style={{ fontFamily: 'Quicksand-Bold' }}
              >
                Delete Account
              </Button>
            </Stack>
          </div>
        </div>
      </div>

      {showEdit && (
        <form
          onSubmit={handleEditSubmit}
          className="flex gap-2 flex-col w-[420px] p-4 border-[#caa67d] border-2 rounded-xl"
        >
          <h1 className="mb-4 font-bold">Edit Your Details</h1>

          <TextField
            label="New Username"
            name="newUsername"
            defaultValue=""
            onChange={handleChanges}
          />

          <TextField
            required
            // sx={{ mb: 2 }}
            label="Current Password"
            name="currentPassword"
            defaultValue=""
            onChange={handleChanges}
          />

          {/* <h1 className="mb-4 font-bold">Change Your Password</h1> */}

          <TextField
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
              onClick={cancelChanges}
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
