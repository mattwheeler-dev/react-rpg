import { useContext } from "react";
import { AppContext } from "../App";
import BattleControls from "../components/BattleControls";
import "../assets/styles/CaveInterior.css";

const CaveInterior = () => {
	const { monsterStats } = useContext(AppContext);

	return (
		<main className="cave-interior">
			<div className="monster">
				<img src={monsterStats.img} alt={monsterStats.altText} />
				<p>{monsterStats.name}</p>
				<p>Health: {monsterStats.health}</p>
				<p>Attack: {monsterStats.attack}</p>
			</div>
			<BattleControls />
		</main>
	);
};

export default CaveInterior;
