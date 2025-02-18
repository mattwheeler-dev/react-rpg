import { useContext } from "react";
import { AppContext } from "../App";

const HealthBar = ({ target }) => {
	const { playerStats, monsterStats } = useContext(AppContext);
	let hp;
	let maxHp;

	if (target == "hero") {
		hp = playerStats.health;
		maxHp = playerStats.maxHealth;
	} else {
		hp = monsterStats.health;
		maxHp = monsterStats.maxHealth;
	}

	const healthBackground = {
		background: `linear-gradient( 90deg, #bd0000 0%, #bd0000 ${
			(hp / maxHp) * 100
		}%,
        #000 ${(hp / maxHp) * 100 + 1}%
        )`,
	};

	return (
		<div className={`health-bar ${target}`}>
			<p style={healthBackground}>
				Health: {hp} / {maxHp}
			</p>
		</div>
	);
};

export default HealthBar;
