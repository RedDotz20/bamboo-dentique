import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { ArrowUp } from 'react-bootstrap-icons';

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
			className="fixed w-10 h-10 bottom-10 right-10 cursor-pointer rounded-full bg-[#a76f3b] text-white border-none transition-all duration-300 ease-in-out flex justify-center items-center"
			style={buttonStyles}
		>
			<ArrowUp size={24} />
		</button>
	);
}

export default ScrollToTopButton;
