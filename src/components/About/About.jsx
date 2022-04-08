import './About.css';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderActive } from 'react-icons/vsc';

import ME from '../../assets/me-about.jpg';

export default function About(){
	return(
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about-me">
				<div className="about--me">
					<div className="about-me-img">
						<img src={ME} alt="about-me" style={{borderRadius:'2rem'}} />
					</div>
				</div>

				<div className="about-content">
					<div className="cards-container">
						<article className="about-card">
							<FaAward className="about-icon"/>
							<h5>Experience</h5>
							<p>0 Years Working</p>
						</article>

						<article className="about-card">
							<FiUser className="about-icon"/>
							<h5>Clients</h5>
							<p>0 Worlwide</p>
						</article>

						<article className="about-card">
							<VscFolderActive className="about-icon"/>
							<h5>Projects</h5>
							<p>20+ Completed</p>
						</article>
					</div>

					<p className="paragraph-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Morbi tincidunt augue quis risus mattis, ac fermentum nunc rhoncus. 
						Praesent rutrum, dolor a tempor luctus, mi nunc rutrum lorem, vitae scelerisque ante lectus eu leo. 
						Nullam euismod ex vel ligula cursus, vitae posuere dolor vehicula.
					</p>

					<a href="#contact" className="btn btn-primary">Let's Talk</a>
				</div>
			</div>
		</section>
	)
}