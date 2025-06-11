import NavControls from "../components/NavControls";

const Welcome = () => {
	return (
		<main className="welcome">
			<h1>Emberhollow</h1>
			<h2>Where heroes are made!</h2>

			<p>
				Greetings, and welcome to Emberhollow! Once a town bustling with traders
				from across the world, all you see now is a ghost town with only a few
				buildings still standing. The few townsfolk who remain look to you with
				hope in their eyes. All you have are the clothes you wear, an axe you
				found on the ground, and the heart of an adventurer! (Your heart, not
				someone else{`'`}s.) Will you be a hero, or will you turn your back on
				the people of Emberhollow?
			</p>

			<NavControls />
		</main>
	);
};

export default Welcome;
