import { useContext } from "react";
import { AppContext } from "../App";

const Controls = () => {
	const { playerStats, setPlayerStats, location, setLocation } =
		useContext(AppContext);

	const goInn = () => {
		setLocation("inn");
	};

	const goShop = () => {
		setLocation("shop");
	};

	const goCaves = () => {
		setLocation("caves");
	};

	const leave = () => {
		setLocation("town");
	};

	const rest = () => {
		setPlayerStats({ ...playerStats, health: playerStats.maxHealth });
	};

	const buttonData = [
		{ text: "The Drunken Dragon", action: goInn, locations: ["town"] },
		{ text: "Volimar's Shop", action: goShop, locations: ["town"] },
		{ text: "Kelindral Caves", action: goCaves, locations: ["town"] },
		{ text: "Rest", action: rest, locations: ["inn"] },
		{ text: "Leave", action: leave, locations: ["inn", "shop"] },
	];

	const buttons = buttonData.map((btn, index) => {
		if (!btn.locations.includes(location)) {
			return;
		} else {
			return (
				<button key={index} onClick={btn.action}>
					{btn.text}
				</button>
			);
		}
	});

	return <div className="controls">{buttons}</div>;
};

export default Controls;
