import NavControls from "../components/NavControls";

const TurnedBack = () => {
	return (
		<main className="turned-back">
			<h1>You chose to turn back...</h1>
			<p>
				The town remains in danger, and you walk away. But don{`'`}t worry,
				maybe next time you{`'`}ll be brave enough to face it.
			</p>
			<NavControls />
		</main>
	);
};

export default TurnedBack;
