import { useContext } from "react";
import { AppContext } from "../App";
import HealthBar from "../components/HealthBar";
import BattleControls from "../components/BattleControls";
import CombatLog from "../components/CombatLog";
import Victory from "../components/Victory";
import "../assets/styles/CaveInterior.css";

const CaveInterior = () => {
	const { monsterStats, victory } = useContext(AppContext);

	return (
		<main className="cave-interior">
			<div className="monster-container">
				<img src={monsterStats.img} alt={monsterStats.name} />
				<div className="monster-stats">
					<p className="monster-name">{monsterStats.name}</p>
					<p>Attack: {monsterStats.attack}</p>
					<HealthBar target={"monster"} />
				</div>
			</div>
			<BattleControls />
			<CombatLog />
			{victory && <Victory />}
		</main>
	);
};

export default CaveInterior;
