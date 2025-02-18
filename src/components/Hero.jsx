import { useState, useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/Hero.css";

const Hero = () => {
	const { playerStats, inventory } = useContext(AppContext);
	const [showHero, setShowHero] = useState(false);
	const currentWeapon = inventory.filter(
		(item) => item.slot == "main-hand" && item.equipped
	)[0];
	const playerDamage = currentWeapon.damage + playerStats.attack;

	const xpBg = {
		background: `linear-gradient( 90deg, #00375b 0%,rgb(0, 121, 201) ${
			(playerStats.xp / playerStats.xpNeeded) * 100
		}%,
        #000 ${(playerStats.xp / playerStats.xpNeeded) * 100 + 1}%
        )`,
	};

	const toggleShowHero = () => {
		setShowHero(!showHero);
	};

	return (
		<>
			<button
				className={`action-bar-icon open-hero ${showHero ? "active" : ""}`}
				onClick={toggleShowHero}
			></button>
			<section className={showHero ? "hero-info open" : "hero-info"}>
				<h2>Hero</h2>
				<p>Level: {playerStats.level}</p>
				<p>
					Health: {playerStats.health} / {playerStats.maxHealth}
				</p>
				<p>
					Damage: {playerDamage} (Attack({playerStats.attack}) + Weapon(
					{currentWeapon.damage}))
				</p>
				<p>Armor: {playerStats.armor}</p>
				<p style={xpBg}>
					XP: {playerStats.xp} / {playerStats.xpNeeded}
				</p>

				<button className="close-hero" onClick={toggleShowHero}>
					X
				</button>
			</section>
		</>
	);
};

export default Hero;
