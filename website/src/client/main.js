import "./main.css";
import "./scroll.js";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import "aos/dist/aos.css";
import AOS from "aos";

gsap.registerPlugin(CSSPlugin);

const Web = () => {
	AOS.init();
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const message = document.getElementById("msg").value;

		if (name.length === 0 || email.length === 0 || message.length === 0) {
			alert("Please fill in all the fields.");
			return;
		}

		const config = require("./config.json");
		const serviceID = config.serviceID;
		const templateID = config.templateID;
		const publicKey = config.publicKey;

		emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
			(result) => {
				// Plane animation
				gsap.timeline()
					.to(".icon svg", 0.4, {
						x: -8,
						y: 8,
						transition: "none",
					})
					.to(".icon svg", 0.4, {
						x: "50vw",
						y: "-50vh",
					})
					.set(".icon svg", {
						x: "-50vw",
						y: "50vh",
					})
					.to(".icon svg", 0.3, {
						x: 0,
						y: 0,
					});
				var textarea = document.getElementById("msg");
				textarea.placeholder = "Message sent successfully!";
				form.current.reset();
			},
			(error) => {
				alert("Error sending message, please try again");
			}
		);
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "Resume_Marie_Samantha_Fidelia.pdf";
		link.download = "Resume_Marie_Samantha_Fidelia.pdf";
		link.click();
	};

	return (
		<div className="main">
			<header>
				<a id="iconheader" href="#profile">
					<img
						src="images/Icon.png"
						loading="lazy"
						className="logo"
						alt="logo"
					/>
				</a>
				<nav className="header-nav">
					<a href="#profile" class="active">
						Profile
					</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>

			<section id="profile">
				<div id="tilt">
					<div class="text-box">
						<div class="text-wrapper">
							<div class="words">
								<span class="word"></span>
								<span class="word">Hello👋 I'm</span>
								<span class="word">Halo👋 Saya</span>
								<span class="word">你 好👋 我 是</span>
								<span class="word">Hallo👋 Ich bin</span>
							</div>
						</div>
						<h1>MARIE</h1>
						<h2>
							<h3>SAM</h3> ANTHA
						</h2>
					</div>
				</div>
				<div class="desc">
					<p2>&lt;Software Sorcerer In The Making/&gt;</p2>
					<div class="fade">
						<div id="jump">
							<a href="#slider-span1" className="explore">
								Explore My Projects <span>👇</span>
							</a>
							<a onClick={handleDownload} className="connect">
								Download My Résumé ⤓
							</a>
						</div>
					</div>
				</div>
				<div id="icons">
					<a href="https://www.linkedin.com/in/msamanthaf/">
						<img
							src="images/linkedin.png"
							loading="lazy"
							className="linkedin"
						/>
					</a>
					<a href="https://github.com/msamanthaf">
						<img
							src="images/github.png"
							loading="lazy"
							className="github"
						/>
					</a>
				</div>
			</section>

			<div class="about">
				<div data-aos="flip-up">
					<img src="images/Aboutme.png"></img>
				</div>
			</div>

			<section id="portfolio">
				<div class="subheading hidden">
					<img src="images/subheading.png" loading="lazy" id="head" />
					<p3>A glimpse of my creations</p3>
					<div class="slide-container">
						<span class="slider-span" id="slider-span1"></span>
						<span class="slider-span" id="slider-span2"></span>
						<span class="slider-span" id="slider-span3"></span>
						<span class="slider-span" id="slider-span4"></span>
						<span class="slider-span" id="slider-span5"></span>

						<div class="image-slider">
							<div class="slides-div" id="slide-1">
								<img
									src="images/speech-less-card.png"
									class="img show"
									id="img1"
								/>
								<a
									href="#slider-span1"
									class="button"
									id="button-1"
								>
									<a
										href="https://devpost.com/software/speechless-vmrfkz"
										class="view-project"
										id="view-button"
									>
										<p4 id="view-text">View &#x27F6;</p4>
									</a>
								</a>
							</div>
							<div class="slides-div" id="slide-2">
								<img
									src="images/expireminder-card.png"
									class="img"
									id="img2"
								/>
								<a
									href="#slider-span2"
									class="button"
									id="button-2"
								>
									<a
										href="https://github.com/msamanthaf/Expireminder"
										class="view-project"
										id="view-button2"
									>
										<p4 id="view-text2">View &#x27F6;</p4>
									</a>
								</a>
							</div>
							<div class="slides-div" id="slide-3">
								<img
									src="images/dsci-card.png"
									class="img"
									id="img3"
								/>
								<a
									href="#slider-span3"
									class="button"
									id="button-3"
								>
									<a
										href="https://github.com/msamanthaf/Ad_Classification_DSCI/blob/main/Final_Project_Ad_Classification.ipynb"
										class="view-project"
										id="view-button3"
									>
										<p4 id="view-text3">View &#x27F6;</p4>
									</a>
								</a>
							</div>
							<div class="slides-div" id="slide-4">
								<img
									src="images/gamejam-card.png"
									class="img"
									id="img4"
								/>
								<a
									href="#slider-span4"
									class="button"
									id="button-4"
								>
									<a
										href="https://github.com/msamanthaf/game-jam"
										class="view-project"
										id="view-button4"
									>
										<p4 id="view-text4">View &#x27F6;</p4>
									</a>
								</a>
							</div>
							<div class="slides-div" id="slide-5">
								<img
									src="images/seamptoms-card.png"
									class="img"
									id="img5"
								/>
								<a
									href="#slider-span5"
									class="button"
									id="button-5"
								>
									<a
										href="https://devpost.com/software/sea-mptoms"
										class="view-project"
										id="view-button5"
									>
										<p4 id="view-text5">View &#x27F6;</p4>
									</a>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="currentwork">
					<div class="fade">
						<img
							src="images/subheading.png"
							loading="lazy"
							id="head"
						/>
						<p>My Journey</p>
					</div>
					<div>
					<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.24/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/EUWk98HiWWcY-eDq/scene.splinecode"></spline-viewer>
    </div>
				</div>
			</section>

			<section id="contact">
				<div class="next fade">
					<img src="images/subheading.png" id="head"></img>
					<span>What's Next?</span>
				</div>
				<div class="background">
					<div class="contactinner">
						<div class="screen">
							<div class="screen-header">
								<div class="screen-header-left">
									<div class="screen-header-button close"></div>
									<div class="screen-header-button maximize"></div>
									<div class="screen-header-button minimize"></div>
								</div>
								<div class="screen-header-right">
									<div class="screen-header-ellipsis"></div>
									<div class="screen-header-ellipsis"></div>
									<div class="screen-header-ellipsis"></div>
								</div>
							</div>
							<div class="screen-body">
								<div class="screen-body-item left">
									<div class="app-title">
										<span>Contact Me!</span>
									</div>
									<span id="contactdesc">
										Whether it's about codes or cats, feel
										free to reach out to me! I'm just a
										message away 😉
									</span>
									<div class="app-contact">
										<a href="mailto: mariesamantha.f@gmail.com">
											mariesamantha.f@gmail.com
										</a>
										<br />
										<br />
										Vancouver, BC, Canada
									</div>
									<div class="contact-icons">
										<img src="images/mailicon.png"></img>
										<img src="images/addressicon.png"></img>
									</div>
									<div class="map">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10415.33325714673!2d-123.2459938!3d49.2606052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0xc79dd4e7732aa2f3!2sThe%20University%20of%20British%20Columbia!5e0!3m2!1sen!2sid!4v1684936462679!5m2!1sen!2sid"
											width="600"
											height="450"
											allowfullscreen=""
											loading="lazy"
											referrerpolicy="no-referrer-when-downgrade"
										></iframe>
									</div>
								</div>
								<div class="screen-body-item">
									<form ref={form} onSubmit={sendEmail}>
										<div class="name">
											<img
												src="images/nameicon.png"
												loading="lazy"
											/>
											<input
												id="name"
												type="text"
												name="from_name"
												placeholder="NAME"
											/>
										</div>
										<div class="email">
											<img
												src="images/emailicon.png"
												loading="lazy"
											/>
											<input
												id="email"
												type="email"
												name="from_email"
												placeholder="EMAIL"
											/>
										</div>
										<div class="message-box">
											<textarea
												id="msg"
												name="message"
												placeholder="MESSAGE"
											/>
										</div>
										<div class="sendbutton">
											<button
												type="submit"
												value="Send"
												class="send"
											>
												<span class="text">Send</span>
												<span class="icon">
													<svg viewBox="0 0 512.005 512.005">
														<path d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z"></path>
													</svg>
												</span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="copyright">
					<span style={{ textAlign: "right" }}>
						© 2023 by Marie Samantha Fidelia <br /> Developed with
						ReactJS and a lot of CSS
					</span>
				</div>
			</section>
		</div>
	);
};

export default Web;
