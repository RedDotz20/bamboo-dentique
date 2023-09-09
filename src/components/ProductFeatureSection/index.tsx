import Styles from './productfeature.module.css';
import Product1 from '../../assets/images/product_1.png';
import Product2 from '../../assets/images/product_2.png';
import Product3 from '../../assets/images/product_3.png';
import Product4 from '../../assets/images/product_4.png';

export default function ProductFeatureSection() {
	return (
		<section className={Styles.featureSection}>
			<h2 className={Styles.productHeading}>Product Features</h2>

			<div className={Styles.featureWrapper}>
				<div className={Styles.imageContainer}>
					<img
						src={Product1}
						alt="Product1"
					/>
				</div>
				<div className={Styles.featureContainer}>
					<h3>Natural Sophistication</h3>
					<p>
						Crafted from carefully selected bamboo, each BambooDentique
						toothbrush embodies the essence of nature. The natural bamboo handle
						exudes an understated elegance that stands out in any bathroom.
					</p>
				</div>
			</div>

			<div className={Styles.featureWrapper}>
				<div className={Styles.imageContainer}>
					<img
						src={Product2}
						alt="Product2"
					/>
				</div>
				<div className={Styles.featureContainer}>
					<h3>Dental Excellence</h3>
					<p>
						Our toothbrushes are designed for superior dental care. The
						carefully engineered bristles provide gentle yet effective cleaning,
						ensuring your oral health remains a top priority.
					</p>
				</div>
			</div>

			<div className={Styles.featureWrapper}>
				<div className={Styles.imageContainer}>
					<img
						src={Product3}
						alt="Product3"
					/>
				</div>
				<div className={Styles.featureContainer}>
					<h3>Eco-Conscious Choice</h3>
					<p>
						BambooDentique is more than a toothbrush; it's a movement towards a
						greener planet. Bamboo is a sustainable, renewable resource, and our
						toothbrushes are biodegradable, reducing plastic waste.
					</p>
				</div>
			</div>

			<div className={Styles.featureWrapper}>
				<div className={Styles.imageContainer}>
					<img
						src={Product4}
						alt="Product4"
					/>
				</div>
				<div className={Styles.featureContainer}>
					<h3>Distinctive Design</h3>
					<p>
						BambooDentique stands out in a world of ordinary toothbrushes. Our
						brand embodies uniqueness, setting you apart as someone who values
						quality and individuality.
					</p>
				</div>
			</div>
		</section>
	);
}
