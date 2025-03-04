import { useState, useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
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
				<h2>Settings</h2>
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
				<p className="socials">
					Find me:
					<a
						href="https://www.linkedin.com/in/mattwheeler-dev/"
						target="_blank"
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
					<a href="https://github.com/mattwheeler-dev" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a href="https://mattwheeler-dev.com" target="_blank">
						<FontAwesomeIcon icon={faGlobe} />
					</a>
				</p>
				<button className="close-btn" onClick={toggleSettings}>
					X
				</button>
			</div>
		</>
	);
};

export default Settings;
