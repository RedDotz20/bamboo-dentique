import Section from '../../../components/Section';
import Styles from './gallery.module.css';
import { productsData } from '../../../data/productsData';

function ImageContainer({ image }: { image: string }) {
	return (
		<div className={Styles.imageContainer}>
			<img
				src={image}
				alt={image}
			/>
		</div>
	);
}

export default function GallerySection() {
	return (
		<Section
			id="gallery"
			className={Styles.gallerySection}
		>
			<h2 className={Styles.galleryTitle}>Gallery</h2>
			<div className={Styles.imageWrapper}>
				{productsData.map((product) => {
					return (
						<ImageContainer
							key={product.image}
							image={product.image}
						/>
					);
				})}
			</div>
		</Section>
	);
}
