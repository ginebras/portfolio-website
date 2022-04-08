import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Portfolio.css';
import IMG1 from '../../assets/port/eCommerce-MERN.png';
import IMG2 from '../../assets/port/movies-app-redux.png';
import IMG3 from '../../assets/port/social-media-react.png';

export default function Portfolio(){

	const data=[
		{
			id:1,
			img:IMG1,
			title:'My ecommerce project',
			url:"eCommerce-MERN"
		},
		{
			id:2,
			img:IMG2,
			title:'My movies app project',
			url:"movies-app-redux"
		},
		{
			id:3,
			img:IMG3,
			title:'My social media project',
			url:"social-media-react"
		},
	]


	return(
		<section id='portfolio'>
			
			<h5>My Recent Work</h5>
			<h2>My Portfolio</h2>

			<Swiper className="container portfolio-container"
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				
				{data.map((dat,index)=>(
					<SwiperSlide className="portfolio-item" key={index}>
						<div className="item-img-container">
							<img src={dat.img} alt="work-img" />
						</div>
						<h3>{dat.title}</h3>
						<a href={`https://github.com/ginebras/${dat.url}`} className="btn" target="_blank">Github</a>
					</SwiperSlide>
				))}

			</Swiper>
		</section>
	)
}