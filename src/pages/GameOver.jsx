import { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
	const { playerStats, slainCount, monsterStats } = useContext(AppContext);

	return (
		<main className="game-over">
			<h1>Game Over...</h1>
			<p>
				The creatures that have come to dwell within Emberhollow Caves proved
				too much for you, but you died fighting to protect the innocent! The
				people of Emberhollow will give you a hero{`'`}s funeral and probably
				build a statue for you or something, if they can ever retrieve your body
				that is...
			</p>
			<div className="scoreboard">
				<h3>Emberhollow{`'`}s (Fallen) Hero</h3>
				<p>Level: {playerStats.level}</p>
				<p>Monsters Slain: {slainCount}</p>
				<p>Ended By: {monsterStats.name}</p>
			</div>
		</main>
	);
};

export default GameOver;
