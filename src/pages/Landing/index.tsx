import CoverPageSection from './CoverPageSection';
import ProductFeatureSection from './ProductFeatureSection';
import GallerySection from './GallerySection';
import FooterSection from './FooterSection';

import Navbar from '../../components/Navbar';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function Landing() {
	return (
		<>
			<Navbar />

			<ScrollToTopButton />

			<CoverPageSection />
			<ProductFeatureSection />
			<GallerySection />
			<FooterSection />
		</>
	);
}
