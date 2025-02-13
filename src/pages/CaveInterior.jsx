import { useContext } from "react";
import { AppContext } from "../App";
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
				<p>Health: {monsterStats.health}</p>
				<p>Attack: {monsterStats.attack}</p>
			</div>
			<BattleControls />
			{victory && <Victory />}
		</main>
	);
};

export default CaveInterior;
