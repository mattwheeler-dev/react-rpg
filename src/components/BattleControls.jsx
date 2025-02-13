import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";

const BattleControls = () => {
	const {
		setLocation,
		playerStats,
		setPlayerStats,
		monsterStats,
		setMonsterStats,
		inventory,
	} = useContext(AppContext);
	const [playerTurn, setPlayerTurn] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			if (playerTurn) {
				return;
			} else if (monsterStats.health < 1) {
				setPlayerStats({
					...playerStats,
					xp: playerStats.xp + monsterStats.xp,
				});
				setPlayerTurn(true);
			} else {
				setPlayerStats({
					...playerStats,
					health: playerStats.health - monsterStats.attack,
				});
				setPlayerTurn(true);
			}
		}, 2000);
	}, [
		monsterStats.attack,
		monsterStats.health,
		monsterStats.xp,
		playerStats,
		playerTurn,
		setPlayerStats,
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
			<button onClick={attack}>Attack</button>
			<button>Defend</button>
			<button onClick={flee}>Flee</button>
		</div>
	);
};

export default BattleControls;
