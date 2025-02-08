import { useState, createContext } from "react";
import Welcome from "./pages/Welcome";
import Town from "./pages/Town";

export const AppContext = createContext();

function App() {
	const [location, setLocation] = useState("welcome");

	return (
		<>
			<AppContext.Provider value={{ location, setLocation }}>
				{location == "welcome" && <Welcome />}
				{location == "town" && <Town />}
			</AppContext.Provider>
		</>
	);
}

export default App;
