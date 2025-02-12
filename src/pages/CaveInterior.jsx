// import Caves from "../components/Caves";
import Monsters from "../components/Monsters";

const CaveInterior = () => {
	const monster = Monsters[Math.floor(Math.random() * Monsters.length)];
	return (
		<main className="cave-interior">
			<div className="monster">
				<img src={monster.img} alt={monster.name} />
				<p>{monster.name}</p>
				<p>{monster.health}</p>
				<p>{monster.attack}</p>
			</div>
		</main>
	);
};

export default CaveInterior;
