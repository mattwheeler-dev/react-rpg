import { useContext } from "react";
import { AppContext } from "../App";
import MonsterFactory from "./MonsterFactory";

const monsterNames = [
	"Dread Slime",
	"Abyssal Salamander",
	"Gloomspinner",
	"Doomhound",
	"Shriekfang",
];

const Victory = () => {
	const {
		playerStats,
		monsterStats,
		setMonsterStats,
		setLocation,
		setVictory,
	} = useContext(AppContext);

	const randomMonster = MonsterFactory(
		monsterNames[Math.floor(Math.random() * monsterNames.length)]
	);

	const continueCaves = () => {
		setMonsterStats(randomMonster);
		setVictory(false);
	};

	const goTown = () => {
		setLocation("town");
		setMonsterStats(randomMonster);
		setVictory(false);
	};

	return (
		<article className="victory-tab">
			<h3>Amazing! You defeated the {monsterStats.name}!</h3>
			<p>
				You have gained {monsterStats.xp} xp!
				<br />
				You loot {Math.ceil(Math.random() * 5 + 1) * playerStats.level} gold!
			</p>
			<div className="controls">
				<button onClick={continueCaves}>Continue Fighting</button>
				<button onClick={goTown}>Leave</button>
			</div>
			<p>(Fleeing during a battle may cause you to drop some gold...)</p>
		</article>
	);
};

export default Victory;
