import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useSound } from "use-sound";
import btnPop from "../assets/sounds/btn-pop.mp3";
import "../assets/styles/Settings.css";

const Settings = () => {
	const { SFXon, setSFXon, musicOn, setMusicOn } = useContext(AppContext);
	const [showSettings, setShowSettings] = useState(false);
	const [playBtnPop] = useSound(btnPop);

	const toggleSettings = () => {
		if (SFXon) {
			playBtnPop();
		}
		setShowSettings(!showSettings);
	};

	const toggleSFX = () => {
		if (SFXon) {
			playBtnPop();
		}
		setSFXon(!SFXon);
	};

	const toggleMusic = () => {
		if (SFXon) {
			playBtnPop();
		}
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
