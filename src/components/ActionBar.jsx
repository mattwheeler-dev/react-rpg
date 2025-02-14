import Hero from "./Hero";
import Pack from "./Pack";
import "../assets/styles/ActionBar.css";

const ActionBar = () => {
	return (
		<div className="action-bar">
			<Hero />
			<Pack />
		</div>
	);
};

export default ActionBar;
