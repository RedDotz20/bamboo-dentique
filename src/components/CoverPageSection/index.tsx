import Button from 'react-bootstrap/Button';
import CoverPage from '../../assets/CoverPage.png';
import Styles from './coverPage.module.css';

export default function CoverPageSection() {
	const customButtonStyle = {
		backgroundColor: '#007bff', // Blue color
		color: '#fff', // White text
		border: 'none', // Remove the border
	};
	return (
		<section>
			<div className={Styles.coverPageWrapper}>
				<div className={Styles.coverContent}>
					<h1>BambooDentique</h1>
					<p>Where Nature Meets Dental Experience</p>
					<Button className={Styles.browseButton}>Browse Products</Button>
				</div>
				<img
					src={CoverPage}
					alt="CoverPage"
					className={Styles.coverPageImg}
				/>
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
				molestiae labore adipisci esse deserunt, cupiditate iusto veritatis
				corporis qui rem dolor soluta tenetur exercitationem culpa corrupti
				pariatur iste quae ex.
			</div>
		</section>
	);
}
