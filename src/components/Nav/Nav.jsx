import { useState } from 'react';

import './Nav.css';

import { AiFillHome,AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDots } from 'react-icons/bi';

export default function Nav(){
	const [ activeNav,setActiveNav ]=useState('');

	return(
		<nav className="nav">
			<div className={activeNav==='#' ? 'active' : ''} onClick={()=>setActiveNav('#')} >
				<a href="#"><AiFillHome/></a>
			</div>
			
			<div className={activeNav==='#about' ? 'active' : ''} onClick={()=>setActiveNav('#about')}>
				<a href="#about"><AiOutlineUser/></a>
			</div>
			
			<div className={activeNav==='#experience' ? 'active' : ''} onClick={()=>setActiveNav('#experience')}>
				<a href="#experience"><BiBook/></a>
			</div>

			<div className={activeNav==='#contact' ? 'active' : ''} onClick={()=>setActiveNav('#contact')}>
				<a href="#contact"><BiMessageSquareDots/></a>
			</div>
		</nav>
	)
}