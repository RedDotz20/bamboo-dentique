import Section from '../../components/Section';

export default function FooterSection() {
	const currentYear = new Date().getFullYear();
	return (
		<Section id="footer">
			<div className="bg-[#a76f3b] flex flex-wrap justify-center py-4 px-7 text-white gap-16 items-center font-bold max-[495px]:gap-[1.75rem]">
				<div>
					<p>About Us</p>
					<p>Blog</p>
					<p>Terms of Use</p>
				</div>

				<div>
					<p>Products</p>
					<p>FAQ</p>
					<p>Privacy Policy</p>
				</div>

				<div>
					<p>Sustainability</p>
					<p>Contact Us</p>
					<p>Services</p>
				</div>
			</div>
			<div className="flex flex-wrap bg-[#caa580] justify-around w-full text-center items-center py-4 px-8 font-bold text-xl">
				<p>Copyright &copy; {currentYear} BambooDentique. All Rights Reserve</p>
				<p>
					made by <a href="https://github.com/RedDotz20">RedDotz</a>
				</p>
			</div>
		</Section>
	);
}
