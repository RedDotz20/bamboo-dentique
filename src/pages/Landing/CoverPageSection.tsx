import Section from '../../components/Section';
import CoverPage from '../../assets/images/CoverPage.png';

import { Button } from '@mui/material';

export default function CoverPageSection() {
	return (
		<Section id="coverPage">
			<div className="relative">
				<header className="absolute flex flex-col justify-center h-screen w-full gap-8 p-[4rem] max-md:p-8">
					<h1 className="font-semiBold text-7xl max-md:text-5xl max-sm:text-4xl">
						BambooDentique
					</h1>
					<p className="font-normal text-2xl max-sm:text-2xl">
						Where Nature Meets Dental Experience
					</p>
					<Button
						variant="contained"
						color="primary"
						className="w-[225px] h-[50px] text-white font-semiBold hover:bg-[#b5956a]"
					>
						Browse Products
					</Button>
				</header>
			</div>

			<img
				className="-z-[1] w-full h-screen bg-cover bg-no-repeat bg-center"
				src={CoverPage}
				alt="Cover Page"
			/>
		</Section>
	);
}
