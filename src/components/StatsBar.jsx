import { useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/StatsBar.css";

const StatsBar = () => {
	const { playerStats } = useContext(AppContext);

	return (
		<div className="stats-bar">
			<p>Level: {playerStats.level}</p>
			<p>Gold: {playerStats.gold}</p>
			<p>
				XP: {playerStats.xp} / {playerStats.xpNeeded}
			</p>
		</div>
	);
};

export default StatsBar;
