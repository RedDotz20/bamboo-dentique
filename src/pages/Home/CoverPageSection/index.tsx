import Button from 'react-bootstrap/Button';
// import CoverPage from '../../../assets/images/CoverPage.png';
import Styles from './coverpage.module.css';
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
			<div className={Styles.coverPageImg}></div>
		</Section>
	);
}
