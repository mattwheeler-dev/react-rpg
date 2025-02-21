import { useContext } from "react";
import { AppContext } from "../App";
import { useSound } from "use-sound";
import btnPop from "../assets/sounds/btn-pop.mp3";
import restSound from "../assets/sounds/rest.mp3";

const NavControls = () => {
	const { playerStats, setPlayerStats, location, setLocation } =
		useContext(AppContext);
	const [playBtnPop] = useSound(btnPop);
	const [playRest] = useSound(restSound);

	const goTown = () => {
		playBtnPop();
		setLocation("town");
	};

	const goInn = () => {
		playBtnPop();
		setLocation("inn");
	};

	const goShop = () => {
		playBtnPop();
		setLocation("shop");
	};

	const goCaveEntrance = () => {
		playBtnPop();
		setLocation("cave entrance");
	};

	const enterCaves = () => {
		playBtnPop();
		setLocation("cave interior");
	};

	const turnBack = () => {
		playBtnPop();
		setLocation("turned back");
	};

	const rest = () => {
		playBtnPop();
		playRest();
		setPlayerStats({ ...playerStats, health: playerStats.maxHealth });
	};

	const buttonData = [
		{ text: "Start Adventure!", action: goTown, locations: ["welcome"] },
		{ text: "Turn Back...", action: turnBack, locations: ["welcome"] },
		{ text: "The Tipsy Pixie", action: goInn, locations: ["town"] },
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
			action: goTown,
			locations: ["inn", "shop", "cave entrance"],
		},
	];

	const buttons = buttonData.map((btn, index) => {
		if (!btn.locations.includes(location)) {
			return;
		} else {
			return (
				<button
					key={index}
					onClick={btn.action}
					disabled={
						btn.text === "Rest" && playerStats.health === playerStats.maxHealth
					}
				>
					{btn.text}
				</button>
			);
		}
	});

	return <div className="nav-controls">{buttons}</div>;
};

export default NavControls;
