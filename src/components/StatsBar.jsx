import { useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/StatsBar.css";

const StatsBar = () => {
	const { playerStats } = useContext(AppContext);
	return (
		<div className="stats-bar">
			<p>Health: {playerStats.maxHealth}</p>
			<p>Gold: {playerStats.gold}</p>
			<p>Level: {playerStats.level}</p>
			<p>Experience: {playerStats.xp}</p>
		</div>
	);
};

export default StatsBar;
