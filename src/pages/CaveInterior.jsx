import { useContext } from "react";
import { AppContext } from "../App";
import HealthBar from "../components/HealthBar";
import BattleControls from "../components/BattleControls";
import Victory from "../components/Victory";
import "../assets/styles/CaveInterior.css";

const CaveInterior = () => {
	const { monsterStats, victory } = useContext(AppContext);

	return (
		<main className="cave-interior">
			<div className="monster">
				<img src={monsterStats.img} alt={monsterStats.name} />
				<p>{monsterStats.name}</p>
				<HealthBar target={monsterStats.name} />
				<p>Attack: {monsterStats.attack}</p>
			</div>
			<BattleControls />
			{victory && <Victory />}
		</main>
	);
};

export default CaveInterior;
