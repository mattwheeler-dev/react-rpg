import { useState, createContext } from "react";
import Welcome from "./pages/Welcome";
import Town from "./pages/Town";
import Inn from "./pages/Inn";
import Shop from "./pages/Shop";
import CaveEntrance from "./pages/CaveEntrance";
import StatsBar from "./components/StatsBar";
import Pack from "./components/Pack";
import Items from "./components/Items";

export const AppContext = createContext();

function App() {
	const [location, setLocation] = useState("welcome");
	const [playerStats, setPlayerStats] = useState({
		level: 1,
		health: 20,
		maxHealth: 20,
		gold: 0,
		xp: 0,
		xpNeeded: 10,
		skills: ["Attack"],
	});
	const [inventory, setInventory] = useState(
		Items.filter((item) => item.inPack)
	);

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
				}}
			>
				{location !== "welcome" && <StatsBar />}
				{location !== "welcome" && <Pack />}
				{location == "welcome" && <Welcome />}
				{location == "town" && <Town />}
				{location == "inn" && <Inn />}
				{location == "shop" && <Shop />}
				{location == "cave entrance" && <CaveEntrance />}
			</AppContext.Provider>
		</>
	);
}

export default App;
