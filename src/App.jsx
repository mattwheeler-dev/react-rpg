import { useState, createContext } from "react";
import Welcome from "./pages/Welcome";
import TurnedBack from "./pages/TurnedBack";
import Town from "./pages/Town";
import Inn from "./pages/Inn";
import Shop from "./pages/Shop";
import CaveEntrance from "./pages/CaveEntrance";
import CaveInterior from "./pages/CaveInterior";
import StatsBar from "./components/StatsBar";
import ActionBar from "./components/ActionBar";
import Items from "./components/Items";
import MonsterFactory from "./components/MonsterFactory";

export const AppContext = createContext();

function App() {
	const [location, setLocation] = useState("welcome");
	const [playerStats, setPlayerStats] = useState({
		level: 1,
		health: 20,
		maxHealth: 20,
		attack: 0,
		armor: 0,
		gold: 4,
		xp: 0,
		xpNeeded: 10,
	});
	const [inventory, setInventory] = useState(
		Items.filter((item) => item.inPack)
	);
	const [monsterStats, setMonsterStats] = useState(() =>
		MonsterFactory("Dread Slime")
	);
	const [combatLog, setCombatLog] = useState([]);
	const [victory, setVictory] = useState(false);

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
			</AppContext.Provider>
		</>
	);
}

export default App;
