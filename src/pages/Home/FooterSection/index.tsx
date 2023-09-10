import Section from '../../../components/Section';
import Styles from './footer.module.css';

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
				<p>Copyright &copy; {currentYear} BambooDentique. All Rights Reserve</p>
				<p>
					made by <a href="https://github.com/RedDotz20">RedDotz</a>
				</p>
			</div>
		</Section>
	);
}
