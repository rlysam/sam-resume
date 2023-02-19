// About Me Page

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { FacebookFill, LinkedinBoxFill, GithubFill, DiscordFill} from 'akar-icons';

const About = () => {
	return (
		<div className="inside-page about">
			<div className="text-content">
				<h1 className="title">About Me</h1>
				<p className="body-text">
					I am a Computer Science student at Technological University of the
					Philppines Manila. I mostly build scripts to automate repetitive tasks
					including but not limited to video games, using Python with PyAutoGUI,
					PyDirectInput, PyTesseract, OpenCV and Android Debug Bridge.
					<br />
					<br />
					I recently got interested in making mobile application. I am using
					Flutter paired with Firebase for the backend for small scale apps.
					<br />
					<br />
					Get to know me more on my social media links!
				</p>
			</div>

		<div className="socials">
			<a href="https://www.google.com/" target="_blank"> <FacebookFill className="link-item" /> </a>
			<a href="https://www.linkedin.com/in/bellosam/" target="_blank"> <LinkedinBoxFill className="link-item" /> </a>
			<a href="https://github.com/rlysam" target="_blank"> <GithubFill className="link-item" /> </a>
			<a href="https://www.google.com/" target="_blank"> <DiscordFill className="link-item" /> </a>
		</div>
	</div>
);
};

export default About;
