import { useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

import Styles from './userprofile.module.css';

export default function UserProfile() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleProfile = () => setIsOpen(!isOpen);
	const username = localStorage.getItem('username');

	return (
		<>
			<Dropdown
				show={isOpen}
				onToggle={toggleProfile}
			>
				<Dropdown.Toggle
					variant="link"
					style={{ background: 'none', border: 'none', color: '#000' }}
					id="dropdown-basic"
				>
					<PersonCircle size={25} />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown className={Styles.textOnly}>{username}</Dropdown>
					<Dropdown.Divider />
					<Dropdown.Item>LOGOUT</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}
