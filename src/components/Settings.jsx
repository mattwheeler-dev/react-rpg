import { useState } from "react";
import "../assets/styles/Settings.css";

const Settings = () => {
	const [showSettings, setShowSettings] = useState(false);

	const toggleSettings = () => {
		setShowSettings(!showSettings);
	};

	return (
		<>
			<button
				className={`action-bar-icon open-settings ${
					showSettings ? "active" : ""
				}`}
				onClick={toggleSettings}
			></button>
			<div className={showSettings ? "settings open" : "settings"}>
				<h3>Settings</h3>
				<div className="sfx toggler">Sound Effects</div>
				<div className="music toggler">Music</div>
				<div className="high-contrast toggler">High-Contrast Mode</div>
				<button className="close-btn" onClick={toggleSettings}>
					X
				</button>
			</div>
		</>
	);
};

export default Settings;
