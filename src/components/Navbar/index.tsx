import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import UserProfile from './UserProfile';

import Styles from './navbar.module.css';

export default function Navbar() {
	const navigate = useNavigate();
	const [scrollPosition, setScrollPosition] = useState(0),
		partialHeight = scrollPosition >= window.innerHeight / 4;
	// viewportHeight = window.innerHeight;

	const navigateToLogin = () => navigate('/login');

	useEffect(() => {
		const handleScroll = () => setScrollPosition(window.scrollY);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const backgroundStyle = {
		backgroundColor: partialHeight ? '#f5f5f5' : 'transparent',
		transition: 'background-color 200ms ease',
		boxShadow: partialHeight
			? 'box-shadow: 1px 11px 5px -7px rgba(0,0,0,0.31)'
			: undefined,
	};

	return (
		<nav
			className={Styles.navbar}
			style={backgroundStyle}
		>
			<GoToSection
				to="coverPage"
				className={Styles.route}
			>
				BambooDentique
			</GoToSection>
			<GoToSection
				to="features"
				className={Styles.route}
			>
				Features
			</GoToSection>
			<GoToSection
				to="gallery"
				className={Styles.route}
			>
				Gallery
			</GoToSection>

			<button
				onClick={navigateToLogin}
				className={Styles.route}
			>
				LOGIN
			</button>
			<UserProfile />
		</nav>
	);
}

interface GoToSectionProps {
	to: string;
	className?: string;
	children: React.ReactNode;
}

function GoToSection({ to, className, children, ...rest }: GoToSectionProps) {
	return (
		<Link
			to={to}
			className={className}
			smooth={true}
			duration={500}
			{...rest}
		>
			{children}
		</Link>
	);
}
