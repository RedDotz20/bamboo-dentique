import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { ArrowUp } from 'react-bootstrap-icons';
import Styles from './scrollToTopButton.module.css';

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		animateScroll.scrollToTop({
			duration: 400,
			smooth: 'easeInOutQuart',
		});
	};

	const buttonStyles = {
		zIndex: isVisible ? 50 : -50,
		opacity: isVisible ? 1 : 0,
	};

	return (
		<button
			onClick={scrollToTop}
			aria-label="Scroll-to-Top"
			type="button"
			className={Styles.scrollToTopButton}
			style={buttonStyles}
		>
			<ArrowUp size={24} />
		</button>
	);
}

export default ScrollToTopButton;
