// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
import NavIconLogo from "../assets/bell.svg";

const Home = () => {
	return (
		<div className="inside-page home">
			<div className="text-content">
			<div className="header">
				 {/* <FontAwesomeIcon className="bell-icon" icon={ faBell } />  */}
					<img src={NavIconLogo} alt="" srcset="" className="nav-logo-icon" />
				<h1 className="title">New Friend Request</h1>
			</div>
		
				<p className="body-text">
					I specialize in designing intuitive and engaging mobile applications
					with a strong emphasis on user interface and user experience. I have
					extensive experience in software development, having been coding since
					my senior year of high school. I am a highly motivated team leader
					with a clear vision and direction, who is always eager to collaborate
					and drive projects to successful completion.
				</p>
			</div>
		</div>
	);
};

export default Home;
