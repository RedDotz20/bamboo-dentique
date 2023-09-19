import Section from '../../components/Section';
import { productsData } from '../../data/productsData';

function ImageContainer({ image }: { image: string }) {
	return (
		<div className="w-[200px] flex items-center justify-center max-[480px]:w-[120px]">
			<img
				className="max-w-full max-h-full block"
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
			className="flex gap-[10] flex-col mt-0 mx-auto mb-14 py-0 px-8"
		>
			<h2 className="text-center font-semiBold text-[4rem] my-14 mx-0">
				Gallery
			</h2>
			<div className="flex flex-wrap my-4 mx-auto justify-center items-center gap-4 w-full">
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
