import Section from '../../components/Section';
import { productsData } from '../../data/productsData';

interface ProductFeatureProps {
	image: string;
	title: string;
	children: React.ReactNode;
}

function ProductFeature(props: ProductFeatureProps) {
	return (
		<div className="featureWrapper flex justify-center mb-24 max-sm:flex-wrap">
			<div className="imageContainer w-[800px] max-sm:w-[220px]">
				<img
					className="block max-w-full max-h-full max-sm:mb-6"
					src={props.image}
					alt={props.image}
				/>
			</div>

			<div className="flex flex-col justify-center">
				<h3 className="text-5xl tracking-[0.1ch] font-semiBold max-md:text-4xl max-sm:text-3xl">
					{props.title}
				</h3>
				<p className="font-normal text-[1.25em] text-gray-600 max-md:text-[1em] max-sm:text-[0.75em]">
					{props.children}
				</p>
			</div>
		</div>
	);
}

export default function ProductFeatureSection() {
	return (
		<Section
			id="features"
			className="flex gap-[10] flex-col my-0 mx-auto max-w-3xl py-0 px-12"
		>
			<h2 className="font-semiBold text-6xl tracking-[0.15ch] text-center my-14 mx-0 max-md:text-5xl max-sm:text-4xl">
				Product Features
			</h2>

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
