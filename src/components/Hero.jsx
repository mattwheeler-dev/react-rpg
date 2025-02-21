import { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import HealthBar from "./HealthBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faHand } from "@fortawesome/free-regular-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { useSound } from "use-sound";
import btnPop from "../assets/sounds/btn-pop.mp3";
import "../assets/styles/Hero.css";

const Hero = () => {
	const { playerStats, setPlayerStats, inventory } = useContext(AppContext);
	const [showHero, setShowHero] = useState(false);
	const currentWeapon = inventory.filter(
		(item) => item.slot == "main-hand" && item.equipped
	)[0];
	const playerDamage = currentWeapon.damage + playerStats.attack;
	const emptySlotIcons = {
		head: faFaceGrin,
		hands: faHand,
		"off-hand": faShield,
	};
	const [playBtnPop] = useSound(btnPop);

	// Calculate player's armor from equipped gear
	useEffect(() => {
		setPlayerStats((prevStats) => {
			const totalArmor = inventory
				.filter((item) => item.equipped && item.armor)
				.reduce((sum, item) => sum + item.armor, 0);

			if (prevStats.armor === totalArmor) return prevStats;

			return { ...prevStats, armor: totalArmor };
		});
	}, [inventory, setPlayerStats]);

	const xpBg = {
		background: `linear-gradient( 90deg, #00375b 0%,rgb(0, 121, 201) ${
			(playerStats.xp / playerStats.xpNeeded) * 100
		}%,
        #000 ${(playerStats.xp / playerStats.xpNeeded) * 100 + 1}%
        )`,
	};

	const equippedGear = inventory.filter((item) => item.equipped);

	const toggleShowHero = () => {
		playBtnPop();
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
				<div className="hero-gear">
					{[
						"head",
						"main-hand",
						"torso",
						"off-hand",
						"hands",
						"legs",
						"feet",
					].map((slot) => {
						const item = equippedGear.find((gear) => gear.slot === slot);
						return (
							<div key={slot} className={slot}>
								{item?.img ? (
									<img src={item.img} alt={item?.name} title={item?.name} />
								) : (
									<FontAwesomeIcon icon={emptySlotIcons[slot]} />
								)}
							</div>
						);
					})}
				</div>
				<div className="hero-stats">
					<p>Level: {playerStats.level}</p>
					<HealthBar target={"hero"} />
					<p style={xpBg}>
						XP: {playerStats.xp} / {playerStats.xpNeeded}
					</p>
					<p>
						Damage: {playerDamage} (Attack({playerStats.attack}) + Weapon(
						{currentWeapon.damage}))
					</p>
					<p>Armor: {playerStats.armor}</p>
				</div>

				<button className="close-hero" onClick={toggleShowHero}>
					X
				</button>
			</section>
		</>
	);
};

export default Hero;
