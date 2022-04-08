import './Header.css';
import ME from '../../assets/me.png';
import { GrInstagram } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

import CV from '../../assets/cv.pdf';

export default function Header(){
	return(
		<header>
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Alejo Franco</h1>
				<h5 className="text-light">Fullstack Developer</h5>
				
				<div className="cta">
					<a href={CV} download className="btn">Dowload CV</a>
					<a href="#contact" className="btn btn-primary">Let's Talk</a>
				</div>
				
				<div className="socials-header">
					<a href="https://www.instagram.com/alejo.francop/" target="_blank"><GrInstagram/></a>
					<a href="https://github.com/ginebras" target="_blank"><BsGithub/></a>
				</div>

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll-down">Scroll Down</a>
			</div>

		</header>
	)
}