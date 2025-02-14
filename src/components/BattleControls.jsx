import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import HealthBar from "./HealthBar";

const BattleControls = () => {
	const {
		setLocation,
		playerStats,
		setPlayerStats,
		monsterStats,
		setMonsterStats,
		inventory,
		setVictory,
	} = useContext(AppContext);
	const [playerTurn, setPlayerTurn] = useState(true);

	const goldGained = 5;

	useEffect(() => {
		if (playerStats.xp >= playerStats.xpNeeded) {
			setPlayerStats((prevStats) => ({
				...prevStats,
				level: prevStats.level + 1,
				health: prevStats.maxHealth + 5,
				maxHealth: prevStats.maxHealth + 5,
				attack: prevStats.attack + 1,
				xp: prevStats.xp - prevStats.xpNeeded,
				xpNeeded: Math.floor(prevStats.xpNeeded * 1.5),
			}));
		}
	}, [playerStats.xp, playerStats.xpNeeded, setPlayerStats]);

	// Monster's turn
	useEffect(() => {
		setTimeout(() => {
			if (playerTurn) {
				return;
			} else if (monsterStats.health < 1) {
				setPlayerStats({
					...playerStats,
					gold: playerStats.gold + goldGained,
					xp: playerStats.xp + monsterStats.xp,
				});
				setPlayerTurn(true);
				setVictory(true);
			} else {
				setPlayerStats({
					...playerStats,
					health: playerStats.health - monsterStats.attack,
				});
				setPlayerTurn(true);
			}
		}, 1500);
	}, [
		monsterStats.attack,
		monsterStats.health,
		monsterStats.xp,
		playerStats,
		playerTurn,
		setPlayerStats,
		setVictory,
	]);

	const attack = () => {
		const currentWeapon = inventory.filter(
			(item) => item.slot == "main-hand" && item.equipped
		)[0];
		const playerDamage = playerStats.attack + currentWeapon.damage;

		setMonsterStats({
			...monsterStats,
			health: monsterStats.health - playerDamage,
		});

		setPlayerTurn(false);
	};

	const flee = () => {
		setLocation("town");
	};

	return (
		<div className="controls">
			<HealthBar target="hero" />
			<button onClick={attack} disabled={!playerTurn}>
				Attack
			</button>
			<button onClick={flee}>Flee</button>
		</div>
	);
};

export default BattleControls;
