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

	const goCaveEntrance = () => {
		setLocation("cave entrance");
	};

	const enterCaves = () => {
		setLocation("cave interior");
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
		{ text: "Kelindral Caves", action: goCaveEntrance, locations: ["town"] },
		{ text: "Rest", action: rest, locations: ["inn"] },
		{
			text: "Enter Caves",
			action: enterCaves,
			locations: ["cave entrance"],
		},
		{
			text: "Leave",
			action: leave,
			locations: ["inn", "shop", "cave entrance"],
		},
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
