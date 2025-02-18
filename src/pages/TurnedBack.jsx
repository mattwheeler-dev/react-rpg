import NavControls from "../components/NavControls";

const TurnedBack = () => {
	return (
		<main className="turned-back">
			<h1>You chose to turn back...</h1>
			<p>
				The town remains in danger, and you walk away. All that{`'`}s left to
				wonder is how far the darkness that befell Kelindral will spread. So
				much for being a hero...
			</p>
			<NavControls />
		</main>
	);
};

export default TurnedBack;
