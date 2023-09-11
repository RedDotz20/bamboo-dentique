import Button from 'react-bootstrap/Button';
import CoverPage from '../../../assets/images/CoverPage.png';
import Styles from './coverPage.module.css';
import Section from '../../../components/Section';

export default function CoverPageSection() {
	return (
		<Section id="coverPage">
			<div className={Styles.coverPageWrapper}>
				<header className={Styles.coverContent}>
					<h1>BambooDentique</h1>
					<p>Where Nature Meets Dental Experience</p>
					<Button
						variant="browseProduct"
						className={Styles.browseButton}
					>
						Browse Products
					</Button>
				</header>
			</div>
			<img
				src={CoverPage}
				alt="CoverPage"
				className={Styles.coverPageImg}
			/>
		</Section>
	);
}
