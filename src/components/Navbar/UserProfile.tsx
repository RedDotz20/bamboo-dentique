import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from 'react-bootstrap-icons';

import Styles from './userprofile.module.css';

export default function UserProfile() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleProfile = () => setIsOpen(!isOpen);

	return (
		<>
			<div className={Styles.profileContainer}>
				<PersonCircle
					className={Styles.profileIcon}
					size={22}
					onClick={toggleProfile}
				/>
				{isOpen && (
					<div className={Styles.profileMenu}>
						<p>Profile Name</p>
						<div>LOGOUT</div>
					</div>
				)}
			</div>
		</>
	);
}
