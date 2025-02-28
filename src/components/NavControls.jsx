import { useContext } from "react";
import { AppContext } from "../App";
import { useSound } from "use-sound";
import btnPop from "../assets/sounds/btn-pop.mp3";
import restSound from "../assets/sounds/rest.mp3";

const NavControls = () => {
	const {
		playerStats,
		setPlayerStats,
		location,
		setLocation,
		playMainMusic,
		SFXon,
	} = useContext(AppContext);
	const [playBtnPop] = useSound(btnPop);
	const [playRest] = useSound(restSound);

	const startAdventure = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("town");
		playMainMusic();
	};

	const goTown = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("town");
	};

	const goInn = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("inn");
	};

	const goShop = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("shop");
	};

	const goCaveEntrance = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("cave entrance");
	};

	const enterCaves = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("cave interior");
	};

	const turnBack = () => {
		if (SFXon) {
			playBtnPop();
		}
		setLocation("turned back");
	};

	const rest = () => {
		if (SFXon) {
			playBtnPop();
			playRest();
		}
		setPlayerStats({ ...playerStats, health: playerStats.maxHealth });
	};

	const buttonData = [
		{
			text: "Start Adventure!",
			action: startAdventure,
			locations: ["welcome"],
		},
		{ text: "Turn Back...", action: turnBack, locations: ["welcome"] },
		{ text: "The Drowsy Dragon", action: goInn, locations: ["town"] },
		{ text: "Volimar's Shop", action: goShop, locations: ["town"] },
		{ text: "Emberhollow Caves", action: goCaveEntrance, locations: ["town"] },
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
