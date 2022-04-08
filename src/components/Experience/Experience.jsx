import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Experience(){
	return(
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="container my-experience">
				<div className="field-experience">
					<div className="content-wrapper">
						<h3>Frontend Development</h3>

						<div className="experience-content">
							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>	
									<h4>HTML</h4>
									<small className="text-light">Experienced</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>CSS</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>JavaScript</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>Bootstrap</h4>
									<small className="text-light">Basic</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>React</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>Angular</h4>
									<small className="text-light">Basic</small>
								</div>
							</article>
						</div>
					</div>
				</div>

				{/* END OF FRONTEND*/}

				<div className="field-experience">
					<div className="content-wrapper">
						<h3>Backend Development</h3>
					
						<div className="experience-content">
							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>PHP</h4>
									<small className="text-light">Basic</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>NodeJS</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>MongoDB</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>

							<article className="experience-details">
								<BsPatchCheckFill className="check-icon"/>
								<div>
									<h4>MySQL</h4>
									<small className="text-light">Intermediate</small>
								</div>
							</article>
						</div>
					</div>
				</div>
				
				{/* END OF BACKEND*/}
			</div>
		</section>
	)
}