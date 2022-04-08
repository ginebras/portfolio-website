import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Testimonials.css';
import AV1 from '../../assets/avatar1.jpg';
import AV2 from '../../assets/avatar2.jpg';
import AV3 from '../../assets/avatar3.jpg';
import AV4 from '../../assets/avatar4.jpg';


export default function Testimonials(){

	const data=[
		{ 
			id:1,
			img:AV1,
			name:'Natalia Rodriguez',
			testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed augue odio. In odio leo, tristique vel lacus eget, pharetra mattis tortor. Nullam consequat purus nunc, ut blandit tortor aliquam vel. Nulla tempor pretium turpis, ac accumsan enim. Praesent pellentesque accumsan dui et pellentesque'
		},
		{ 
			id:2,
			img:AV2,
			name:'Ernesto Echeverria',
			testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed augue odio. In odio leo, tristique vel lacus eget, pharetra mattis tortor. Nullam consequat purus nunc, ut blandit tortor aliquam vel. Nulla tempor pretium turpis, ac accumsan enim. Praesent pellentesque accumsan dui et pellentesque'
		},
		{ 
			id:3,
			img:AV3,
			name:'Geralt de Rivia',
			testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed augue odio. In odio leo, tristique vel lacus eget, pharetra mattis tortor. Nullam consequat purus nunc, ut blandit tortor aliquam vel. Nulla tempor pretium turpis, ac accumsan enim. Praesent pellentesque accumsan dui et pellentesque'
		},
		{ 
			id:4,
			img:AV4,
			name:'Sigurney Weaver',
			testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed augue odio. In odio leo, tristique vel lacus eget, pharetra mattis tortor. Nullam consequat purus nunc, ut blandit tortor aliquam vel. Nulla tempor pretium turpis, ac accumsan enim. Praesent pellentesque accumsan dui et pellentesque'
		},
	]

	return(
		<section id='testimonials'>
			<h5>Review From Clients</h5>
			<h2>Testimonials</h2>

			<Swiper className="container testimonials-container"
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				
				{data.map((dat,index)=>(
					<SwiperSlide className="testimonial">
						<div className="img-testimonial">
							<img src={dat.img} alt="testimonial-avatar" />
						</div>
						<h5>{dat.name}</h5>
						<small>{dat.testimonial} </small>
					</SwiperSlide>
				))}

			</Swiper>
		</section>
	)
}