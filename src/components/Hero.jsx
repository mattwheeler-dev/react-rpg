import { useState, useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/Hero.css";

const Hero = () => {
	const { playerStats } = useContext(AppContext);
	const [showHero, setShowHero] = useState(false);

	const toggleShowHero = () => {
		setShowHero(!showHero);
	};

	return (
		<>
			<button
				className="action-bar-icon open-hero"
				onClick={toggleShowHero}
			></button>
			<section className={showHero ? "hero-info open" : "hero-info"}>
				<h2>Hero</h2>
				<p>{playerStats.level}</p>
				<p>{playerStats.maxHealth}</p>
				<p>{playerStats.attack}</p>
				<p>
					{playerStats.xp} / {playerStats.xpNeeded}
				</p>

				<button className="close-hero" onClick={toggleShowHero}>
					X
				</button>
			</section>
		</>
	);
};

export default Hero;
