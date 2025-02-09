import { useState, createContext } from "react";
import Welcome from "./pages/Welcome";
import Town from "./pages/Town";
import Inn from "./pages/Inn";
import Shop from "./pages/Shop";
import Caves from "./pages/Caves";
import StatsBar from "./components/StatsBar";

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

	return (
		<>
			<AppContext.Provider
				value={{ location, setLocation, playerStats, setPlayerStats }}
			>
				{location !== "welcome" && <StatsBar />}
				{location == "welcome" && <Welcome />}
				{location == "town" && <Town />}
				{location == "inn" && <Inn />}
				{location == "shop" && <Shop />}
				{location == "caves" && <Caves />}
			</AppContext.Provider>
		</>
	);
}

export default App;
