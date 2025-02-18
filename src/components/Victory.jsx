import { useContext } from "react";
import { AppContext } from "../App";
import MonsterFactory from "./MonsterFactory";
import "../assets/styles/Victory.css";

const monsterNames = [
	"Dread Slime",
	"Abyssal Salamander",
	"Gloomspinner",
	"Doomhound",
	"Shriekfang",
];

const Victory = () => {
	const {
		monsterStats,
		setMonsterStats,
		setLocation,
		combatLog,
		setCombatLog,
		setVictory,
	} = useContext(AppContext);

	const randomMonster = MonsterFactory(
		// monsterNames[Math.floor(Math.random() * monsterNames.length)]
		monsterNames[0]
	);

	const continueCaves = () => {
		setMonsterStats(randomMonster);
		setCombatLog([
			...combatLog,
			`You continue through the caves and encounter a ${monsterStats.name}!`,
		]);
		setVictory(false);
	};

	const goTown = () => {
		setLocation("town");
		setMonsterStats(randomMonster);
		setVictory(false);
	};

	return (
		<article className="victory-tab">
			<h3>Amazing, you defeated the {monsterStats.name}!</h3>
			<p>Do you continue fighting monsters or do you return to town?</p>
			<div className="nav-controls">
				<button onClick={continueCaves}>Continue Fighting</button>
				<button onClick={goTown}>Leave</button>
			</div>
			<p className="tip">
				(Fleeing during a battle may cause you to drop some gold...)
			</p>
		</article>
	);
};

export default Victory;
