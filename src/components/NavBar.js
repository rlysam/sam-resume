import { Link } from "react-router-dom";
import NavIconLogo from "../assets/Nav-Icon.svg";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="nav-icon">
				<Link to="/">
				<img src={ NavIconLogo } alt="" srcset="" className="nav-logo-icon" />	
				</Link>
			</h1>
			<div className="links">
				<Link to="/">
					Home
				</Link>
				<Link to="/About">About</Link>
				<Link to="/About">Skills</Link>
				<Link to="/About">Portfolio</Link>
				<Link to="/About">Socials</Link>
			</div>
		</nav>
	);
};

export default Navbar;
