import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
	children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			const entranceAnimation = {
				opacity: 1,
				x: 0, // Move from left to right
				transition: { duration: 0.5 },
			};
			controls.start(entranceAnimation);
		} else {
			const exitAnimation = {
				opacity: 0,
				x: -100, // Move to the left when exiting
				transition: { duration: 0.5 },
			};
			controls.start(exitAnimation);
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: -100 }}
			animate={controls}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
