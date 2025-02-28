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

	const toggleHighContrast = () => {
		if (SFXon) {
			playBtnPop();
		}
		document.querySelector("body").classList.toggle("hc");
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
				<label>
					<input type="checkbox" defaultChecked onClick={toggleSFX} />
					Sound Effects
				</label>
				<label>
					<input type="checkbox" defaultChecked onClick={toggleMusic} />
					Music
				</label>
				<label>
					<input type="checkbox" onClick={toggleHighContrast} />
					High-Contrast Mode
				</label>
				<button className="close-btn" onClick={toggleSettings}>
					X
				</button>
			</div>
		</>
	);
};

export default Settings;
