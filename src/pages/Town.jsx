import { useContext } from "react";
import { AppContext } from "../App";

const Town = () => {
	const { setLocation } = useContext(AppContext);

	const travel = (e) => {
		const newLocation = e.target.textContent;
		switch (newLocation) {
			case "The Drunken Dragon":
				setLocation("inn");
				break;
			case "Volimar's Shop":
				setLocation("shop");
				break;
			case "Kelindral Caves":
				setLocation("caves");
				break;
			default:
				break;
		}
	};

	return (
		<main className="town">
			<h1>Kelindral</h1>
			<p>
				You see a (mostly) intact inn named {`'`}The Drunken Dragon{`'`} where
				you should be able to find rest when needed.
				<br />
				Luckily, one of the remaining townsfolk is a merchant named Volimar who
				has set up shop in the town square. You can buy and sell items here to
				help you on your journey.
				<br />
				At the western edge of town, you see the entrance to the Kelindral
				Caves. Once a reliable source of silver and gems that helped Kelindral
				become a prosperous town, the caves are now overrun with monsters. There
				is an ominous purple glow coming from the entrance, and you can hear the
				sounds of creatures echoing from within.
			</p>
			<div className="btns-container">
				<button onClick={travel}>The Drunken Dragon</button>
				<button onClick={travel}>Volimar{`'`}s Shop</button>
				<button onClick={travel}>Kelindral Caves</button>
			</div>
		</main>
	);
};

export default Town;
