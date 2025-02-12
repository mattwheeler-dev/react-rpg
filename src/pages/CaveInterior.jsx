import { useState } from "react";
// import Caves from "../components/Caves";
import MonsterFactory from "../components/MonsterFactory";
import "../assets/styles/CaveInterior.css";

const CaveInterior = () => {
	const [currentMonster] = useState(MonsterFactory("Dread Slime"));
	return (
		<main className="cave-interior">
			<div className="monster">
				<img src={currentMonster.img} alt={currentMonster.altText} />
				<p>{currentMonster.name}</p>
				<p>Health: {currentMonster.health}</p>
				<p>Attack: {currentMonster.attack}</p>
			</div>
		</main>
	);
};

export default CaveInterior;
