import { useContext } from "react";
import { AppContext } from "../App";
import MonsterFactory from "./MonsterFactory";
import { useSound } from "use-sound";
import btnPop from "../assets/sounds/btn-pop.mp3";
import "../assets/styles/Victory.css";

const monsterNames = [
	"Bat",
	"Bird",
	"Bunn",
	"Crab",
	"Lizard",
	"Poker",
	"Rat",
	"Shell",
	"Slime",
];

const Victory = () => {
	const {
		playerStats,
		monsterStats,
		setMonsterStats,
		setLocation,
		combatLog,
		setCombatLog,
		setVictory,
		SFXon,
	} = useContext(AppContext);
	const [playBtnPop] = useSound(btnPop);

	const continueCaves = () => {
		if (SFXon) {
			playBtnPop();
		}
		const randomMonster = MonsterFactory(
			monsterNames[Math.floor(Math.random() * monsterNames.length)]
		);
		setMonsterStats({
			...randomMonster,
			health: randomMonster.health + playerStats.level,
			maxHealth: randomMonster.maxHealth + playerStats.level,
			attack: randomMonster.attack + playerStats.level,
			xp: randomMonster.xp + playerStats.level,
		});
		setCombatLog([
			...combatLog,
			`You continue through the caves and encounter a ${randomMonster.name}!`,
		]);
		setVictory(false);
	};

	const goTown = () => {
		if (SFXon) {
			playBtnPop();
		}
		const randomMonster = MonsterFactory(
			monsterNames[Math.floor(Math.random() * monsterNames.length)]
		);
		setMonsterStats(randomMonster);
		setLocation("town");
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
