import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsInstagram,BsWhatsapp } from 'react-icons/bs';

export default function Contact(){
	const { register,handleSubmit,formState:{errors} }=useForm();

	const sendEmail=(data)=>{
		console.log(data);

		emailjs.send("service_ycma7gt","template_at5928n",data,'JBiWeGofp9OTThc97');
	}

	return(
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact-container">
				
				<div className="contact-options">
					<article>
						<HiOutlineMail className="contact-icon"/>
						
						<div>
							<h3>Email</h3>
							<small className="color-light">alenicofranco@gmail.com</small>
						</div>

					</article>

					<article>
						<BsInstagram className="contact-icon"/>
						<div>
							<h3>Instagram</h3>
							<small className="color-light">alejo.francop</small>
						</div>
						<a href="https://www.instagram.com/alejo.francop/">Send a message</a>
					</article>

					<article>
						<BsWhatsapp className="contact-icon"/>
						<div>
							<h3>Whatsapp</h3>
							<small className="color-light">+11 5020 6080</small>
						</div>
					</article>
				</div>

				<form className="form-contact" onSubmit={handleSubmit(sendEmail)}>
					<input className="form-input" type="text" placeholder="Your Full Name" {...register('name',{required:true})} />
					
					<input className="form-input" type="email" placeholder="Your Email" {...register('email',{required:true})} />
					
					<textarea className="form-input" row={5} {...register('message',{required:true})} defaultValue="Your Message"></textarea>
					<div>
						<button className="btn btn-primary" type="submit">Send Message</button>
					</div>
				</form>
			</div>
		</section>
	)
}