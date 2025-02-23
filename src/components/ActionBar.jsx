import Hero from "./Hero";
import Pack from "./Pack";
import Settings from "./Settings";
import "../assets/styles/ActionBar.css";

const ActionBar = () => {
	return (
		<div className="action-bar">
			<Hero />
			<Pack />
			<Settings />
		</div>
	);
};

export default ActionBar;
