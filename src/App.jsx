import { useState, createContext } from "react";
import Welcome from "./pages/Welcome";
import Town from "./pages/Town";
import StatsBar from "./components/StatsBar";

export const AppContext = createContext();

function App() {
	const [location, setLocation] = useState("welcome");
	const [playerStats, setPlayerStats] = useState({
		level: 1,
		maxHealth: 20,
		gold: 10,
		xp: 0,
	});

	return (
		<>
			<AppContext.Provider
				value={{ location, setLocation, playerStats, setPlayerStats }}
			>
				{location == "welcome" && <Welcome />}
				{location == "town" && <Town />}
				<StatsBar />
			</AppContext.Provider>
		</>
	);
}

export default App;
