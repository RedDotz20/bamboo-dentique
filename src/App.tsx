import CoverPageSection from './sections/CoverPageSection';
import ProductFeatureSection from './sections/ProductFeatureSection';
import GallerySection from './sections/GallerySection';
import FooterSection from './sections/FooterSection';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
	return (
		<main>
			<BootstrapCustomTheme />
			<Navbar />
			<ScrollToTopButton />

			<CoverPageSection />
			<ProductFeatureSection />
			<GallerySection />
			<FooterSection />
		</main>
	);
}

function BootstrapCustomTheme() {
	return (
		<style type="text/css">
			{`
			.btn-browseProduct {
				font-family: "QuickSand-Bold";
				background-color: #caa67d;
				color: white;
				font-weight: 700;
				font-size: 1.25rem;
				border-radius: 12px;
			}

			// .btn-browseProduct:hover {
			//   background-color: black;
			// }

		`}
		</style>
	);
}
