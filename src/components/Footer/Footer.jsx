import './Footer.css';
import { BsInstagram } from 'react-icons/bs';

export default function Footer(){
	return(
		<footer>
			<a href="#" className="footer-title">ALEJO FRANCO</a>

			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About me</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			
			<div className="footer-copyright">
				<small>&copy;ALEJO FRANCO </small>
			</div>
		</footer>
	)
}