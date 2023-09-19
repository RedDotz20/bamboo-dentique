import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const partialHeight = scrollPosition >= window.innerHeight / 4;
	// viewportHeight = window.innerHeight;

	const navigate = useNavigate();
	const navigateToLogin = () => navigate('/login');

	useEffect(() => {
		const handleScroll = () => setScrollPosition(window.scrollY);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const transparency = partialHeight ? 'bg-[#f5f5f5]' : 'bg-transparent';
	const shadow = partialHeight ? 'shadow-md' : '';

	return (
		<nav
			className={`${transparency} ${shadow} transition-colors duration-200 ease-in-out fixed top-0 z-50 h-[60px]  items-center flex py-2 px-16 w-full gap-1 cursor-pointer font-semiBold text-black decoration-0 text-xl`}
		>
			<GoToSection
				to="coverPage"
				className="text-[#a76f3b] font-bold"
			>
				BambooDentique
			</GoToSection>
			<GoToSection
				to="features"
				className="mx-8"
			>
				Features
			</GoToSection>
			<GoToSection
				to="gallery"
				className="mx-8"
			>
				Gallery
			</GoToSection>

			<button
				onClick={navigateToLogin}
				className="border-none bg-transparent decoration-0 ml-auto"
			>
				LOGIN
			</button>
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
