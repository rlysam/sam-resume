import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="nav-icon">S</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
				<Link to="/About">Skills</Link>
				<Link to="/About">Portfolio</Link>
				<Link to="/About">Socials</Link>
			</div>
		</nav>
	);
};

export default Navbar;
