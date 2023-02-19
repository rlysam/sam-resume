import { Link } from "react-router-dom";
import NavIconLogo from "../assets/Nav-Icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faGear, faEye, faEnvelope, } 
from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="nav-icon">
				<Link to="/">
					<img src={NavIconLogo} alt="" srcset="" className="nav-logo-icon" />
				</Link>
			</h1>
			<div className="links">
				<Link to="/"> <     FontAwesomeIcon className="link-item" icon={faHome} /> </Link>
				<Link to="/About"> <FontAwesomeIcon className="link-item" icon={faUser} /> </Link>
				<Link to="/Skills"><FontAwesomeIcon className="link-item" icon={faGear} /> </Link>
				<Link to="/Works"> <FontAwesomeIcon className="link-item" icon={faEye} /> </Link>
				<Link to="/Socials"> <FontAwesomeIcon className="link-item" icon={faEnvelope} /> </Link>
			</div>
		</nav>
	);
};

export default Navbar;
