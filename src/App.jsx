import { useState, createContext, useEffect } from "react";
import Welcome from "./pages/Welcome";
import TurnedBack from "./pages/TurnedBack";
import Town from "./pages/Town";
import Inn from "./pages/Inn";
import Shop from "./pages/Shop";
import GameOver from "./pages/GameOver";
import CaveEntrance from "./pages/CaveEntrance";
import CaveInterior from "./pages/CaveInterior";
import StatsBar from "./components/StatsBar";
import ActionBar from "./components/ActionBar";
import Items from "./components/Items";
import MonsterFactory from "./components/MonsterFactory";
import useSound from "use-sound";
import mainMusic from "./assets/sounds/main-music.mp3";
import caveMusic from "./assets/sounds/cave-music.mp3";

export const AppContext = createContext();

const monsterNames = [
	"Bat",
	"Bird",
	"Bunn",
	"Crab",
	"Lizard",
	"Poker",
	"Rat",
	"Shell",
	"Slime",
];

const randomMonster =
	monsterNames[Math.floor(Math.random() * monsterNames.length)];

function App() {
	const [location, setLocation] = useState("welcome");
	const [playerStats, setPlayerStats] = useState({
		level: 1,
		health: 20,
		maxHealth: 20,
		attack: 0,
		armor: 0,
		gold: 0,
		xp: 0,
		xpNeeded: 10,
	});
	const [inventory, setInventory] = useState(
		Items.filter((item) => item.inPack)
	);
	const [monsterStats, setMonsterStats] = useState(() =>
		MonsterFactory(randomMonster)
	);
	const [combatLog, setCombatLog] = useState([]);
	const [victory, setVictory] = useState(false);
	const [slainCount, setSlainCount] = useState(0);
	const [currentMusic, setCurrentMusic] = useState(null);

	// SFX and music
	const [SFXon, setSFXon] = useState(true);
	const [musicOn, setMusicOn] = useState(true);
	const [playMainMusic, { stop: stopMainMusic }] = useSound(mainMusic, {
		volume: 0.5,
		loop: true,
	});
	const [playCaveMusic, { stop: stopCaveMusic }] = useSound(caveMusic, {
		volume: 0.5,
		loop: true,
	});

	// Play / change bg music based on location
	useEffect(() => {
		if (location === "welcome" || !musicOn) {
			stopMainMusic();
			stopCaveMusic();
			setCurrentMusic(null);
			return;
		}

		if (location == "cave interior" && currentMusic !== "cave" && musicOn) {
			stopMainMusic();
			setCurrentMusic("cave");
			playCaveMusic();
		} else if (
			location !== "cave interior" &&
			currentMusic !== "main" &&
			musicOn
		) {
			stopCaveMusic();
			setCurrentMusic("main");
			playMainMusic();
		}
	}, [
		currentMusic,
		location,
		musicOn,
		playCaveMusic,
		playMainMusic,
		stopCaveMusic,
		stopMainMusic,
	]);

	return (
		<>
			<AppContext.Provider
				value={{
					location,
					setLocation,
					playerStats,
					setPlayerStats,
					inventory,
					setInventory,
					monsterStats,
					setMonsterStats,
					combatLog,
					setCombatLog,
					victory,
					setVictory,
					slainCount,
					setSlainCount,
					playMainMusic,
					SFXon,
					setSFXon,
					musicOn,
					setMusicOn,
				}}
			>
				{location !== "welcome" && location !== "turned back" && (
					<>
						<StatsBar />
						<ActionBar />
					</>
				)}
				{location == "turned back" && <TurnedBack />}
				{location == "welcome" && <Welcome />}
				{location == "town" && <Town />}
				{location == "inn" && <Inn />}
				{location == "shop" && <Shop />}
				{location == "cave entrance" && <CaveEntrance />}
				{location == "cave interior" && <CaveInterior />}
				{location == "game over" && <GameOver />}
			</AppContext.Provider>
		</>
	);
}

export default App;
