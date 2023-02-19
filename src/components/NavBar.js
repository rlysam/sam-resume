import React from 'react';
import { Link, useLocation} from "react-router-dom";
import NavIconLogo from "../assets/Nav-Icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faGear, faEye, faEnvelope, } 
from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="navbar">
			<div className="nav-icon">
				<Link to="/">
					<img src={NavIconLogo} alt="" srcset="" className="nav-logo-icon" />
				</Link>
			</div>
			<div className="links">
				<Link acti to="/"> <     FontAwesomeIcon   className={location.pathname === '/' ? 'active' : 'link-item'} icon={faHome} /> </Link>
				<Link acti to="/About"> <FontAwesomeIcon   className={location.pathname === '/About' ? 'active' : 'link-item'} icon={faUser} /> </Link>
				<Link acti to="/Skills"><FontAwesomeIcon   className={location.pathname === '/Skills' ? 'active' : 'link-item'} icon={faGear} /> </Link>
				<Link acti to="/Works"> <FontAwesomeIcon   className={location.pathname === '/Works' ? 'active' : 'link-item'} icon={faEye} /> </Link>
				<Link acti to="/Socials"> <FontAwesomeIcon className={location.pathname === '/Socials' ? 'active' : 'link-item'} icon={faEnvelope} /> </Link>
			</div>
		</nav>
	);
};

export default Navbar;
