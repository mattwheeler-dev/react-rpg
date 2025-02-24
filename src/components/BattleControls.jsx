import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import HealthBar from "./HealthBar";
import { useSound } from "use-sound";
import attackSound from "../assets/sounds/attack.mp3";
import monsterAttackSound from "../assets/sounds/monster-attack.mp3";
import blockedSound from "../assets/sounds/blocked.mp3";
import fleeSound from "../assets/sounds/flee.mp3";
import levelUpSound from "../assets/sounds/level-up.mp3";
import gameOverSound from "../assets/sounds/game-over.mp3";

const BattleControls = () => {
	const {
		setLocation,
		playerStats,
		setPlayerStats,
		monsterStats,
		setMonsterStats,
		inventory,
		combatLog,
		setCombatLog,
		setVictory,
		slainCount,
		setSlainCount,
		SFXon,
	} = useContext(AppContext);
	const [playerTurn, setPlayerTurn] = useState(true);

	// State for animations
	const [showSlash, setShowSlash] = useState(false);
	const [showMonsterAttack, setShowMonsterAttack] = useState(false);
	const [showBlock, setShowBlock] = useState(false);

	// Sounds
	const [playAttackSound] = useSound(attackSound);
	const [playMonsterAttackSound] = useSound(monsterAttackSound);
	const [playBlockedSound] = useSound(blockedSound);
	const [playFleeSound] = useSound(fleeSound);
	const [playLevelUpSound] = useSound(levelUpSound);
	const [playGameOverSound] = useSound(gameOverSound);

	const goldGained = Math.floor(Math.random() * 7) + 4;

	// Level up
	useEffect(() => {
		if (playerStats.xp >= playerStats.xpNeeded) {
			if (SFXon) {
				playLevelUpSound();
			}
			setPlayerStats((prevStats) => ({
				...prevStats,
				level: prevStats.level + 1,
				health: prevStats.maxHealth + 5,
				maxHealth: prevStats.maxHealth + 5,
				attack: prevStats.attack + 1,
				xp: prevStats.xp - prevStats.xpNeeded,
				xpNeeded: Math.floor(prevStats.xpNeeded * 1.5),
			}));
			setCombatLog((prevLog) => [
				...prevLog,
				"Congrats! You leveled up!",
				"| Attack + 1 & Max Health + 5 |",
			]);
		}
	}, [playerTurn]);

	// Monster turn
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
				setCombatLog((prevLog) => [
					...prevLog,
					`You have defeated the ${monsterStats.name}!`,
				]);
				setSlainCount(slainCount + 1);
				setPlayerTurn(true);
				setVictory(true);
			} else if (playerStats.armor >= monsterStats.attack) {
				if (SFXon) {
					playBlockedSound();
				}
				setShowBlock(true);
				setTimeout(() => {
					setShowBlock(false);
				}, 750);
				setCombatLog((prevLog) => [
					...prevLog,
					`The ${monsterStats.name} attacked you, but your armor (${playerStats.armor}) blocked all  ${monsterStats.attack} damage!`,
				]);
				setPlayerTurn(true);
			} else {
				if (SFXon) {
					playMonsterAttackSound();
				}
				setShowMonsterAttack(true);
				setTimeout(() => {
					setShowMonsterAttack(false);
				}, 500);

				setPlayerStats({
					...playerStats,
					health:
						playerStats.health - (monsterStats.attack - playerStats.armor),
				});
				setCombatLog((prevLog) => [
					...prevLog,
					`The ${monsterStats.name} attacks you for ${
						monsterStats.attack - playerStats.armor
					} damage.`,
				]);
				setPlayerTurn(true);
			}
		}, 1500);

		// Check for player death
		if (playerStats.health < 1) {
			if (SFXon) {
				playGameOverSound();
			}
			setLocation("game over");
		}
	}, [playerTurn]);

	const attack = () => {
		if (SFXon) {
			playAttackSound();
		}
		setShowSlash(true);
		setTimeout(() => {
			setShowSlash(false);
		}, 500);
		const currentWeapon = inventory.filter(
			(item) => item.slot == "main-hand" && item.equipped
		)[0];
		const playerDamage = playerStats.attack + currentWeapon.damage;

		setMonsterStats({
			...monsterStats,
			health: monsterStats.health - playerDamage,
		});

		setCombatLog([
			...combatLog,
			`You attacked the ${monsterStats.name} for ${playerDamage} damage.`,
		]);

		setPlayerTurn(false);
	};

	const flee = () => {
		if (SFXon) {
			playFleeSound();
		}
		setLocation("town");
		if (playerStats.gold > 10) {
			setPlayerStats({
				...playerStats,
				gold: playerStats.gold - (Math.floor(Math.random() * 3) + 1),
			});
		}
	};

	return (
		<div className="battle-controls">
			{showSlash && <div className="slash"></div>}
			{showMonsterAttack && <div className="monster-attack"></div>}
			{showBlock && <div className="block"></div>}
			<p className="hero-name">Hero</p>
			<HealthBar target="hero" />
			<button onClick={attack} disabled={!playerTurn}>
				Attack
			</button>
			<button onClick={flee} disabled={!playerTurn}>
				Flee
			</button>
		</div>
	);
};

export default BattleControls;
