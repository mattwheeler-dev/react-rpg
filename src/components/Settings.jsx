import { useState, useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/Settings.css";

const Settings = () => {
	const { SFXon, setSFXon, musicOn, setMusicOn } = useContext(AppContext);
	const [showSettings, setShowSettings] = useState(false);

	const toggleSettings = () => {
		setShowSettings(!showSettings);
	};

	const toggleSFX = () => {
		setSFXon(!SFXon);
	};

	const toggleMusic = () => {
		setMusicOn(!musicOn);
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
				<div className="sfx toggler">
					<input
						id="sfx-check"
						type="checkbox"
						defaultChecked
						onClick={toggleSFX}
					/>
					<label htmlFor="sfx-check">Sound Effects</label>
				</div>
				<div className="music toggler">
					<input
						id="music-check"
						type="checkbox"
						defaultChecked
						onClick={toggleMusic}
					/>
					<label htmlFor="music-check">Music</label>
				</div>
				<div className="high-contrast toggler">High-Contrast Mode</div>
				<button className="close-btn" onClick={toggleSettings}>
					X
				</button>
			</div>
		</>
	);
};

export default Settings;
