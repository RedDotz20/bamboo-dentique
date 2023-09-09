import React from 'react';

interface SectionProps {
	id: string;
	className?: string;
	children: React.ReactNode;
}

const Section = ({ id, className, children, ...rest }: SectionProps) => {
	return (
		<section
			id={id}
			className={className}
			{...rest}
		>
			{children}
		</section>
	);
};

export default Section;
