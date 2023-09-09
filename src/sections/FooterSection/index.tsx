import Styles from './footer.module.css';

import Section from '../../components/Section';

export default function FooterSection() {
	const currentYear = new Date().getFullYear();
	return (
		<Section id="footer">
			<div className={Styles.mainFooter}>
				<p>About Us</p>
				<p>Blog</p>
				<p>Terms of Use</p>

				<p>Products</p>
				<p>FAQ</p>
				<p>Privacy Policy</p>

				<p>Sustainability</p>
				<p>Contact Us</p>
			</div>
			<div className={Styles.copyrightSection}>
				<h5>
					Copyright &copy; {currentYear} BambooDentique. All Rights Reserve
				</h5>
				<h5>
					made by <a href="https://github.com/RedDotz20">RedDotz</a>
				</h5>
			</div>
		</Section>
	);
}
