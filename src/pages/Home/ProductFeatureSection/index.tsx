import Section from '../../../components/Section';
import { productsData } from '../../../data/productsData';

import Styles from './productfeature.module.css';

interface ProductFeatureProps {
	image: string;
	title: string;
	children: React.ReactNode;
}

function ProductFeature(props: ProductFeatureProps) {
	return (
		<div className={Styles.featureWrapper}>
			<div className={Styles.imageContainer}>
				<img
					src={props.image}
					alt={props.image}
				/>
			</div>
			<div className={Styles.featureContainer}>
				<h3>{props.title}</h3>
				<p>{props.children}</p>
			</div>
		</div>
	);
}

export default function ProductFeatureSection() {
	return (
		<Section
			id="features"
			className={Styles.featureSection}
		>
			<h2 className={Styles.productHeading}>Product Features</h2>

			{productsData.map((product) => {
				return (
					<ProductFeature
						key={product.title}
						title={product.title}
						image={product.image}
					>
						{product.description}
					</ProductFeature>
				);
			})}
		</Section>
	);
}
