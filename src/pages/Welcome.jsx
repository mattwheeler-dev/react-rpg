import { useContext } from "react";
import { AppContext } from "../App";

const Welcome = () => {
	const { setLocation } = useContext(AppContext);

	const startAdventure = () => {
		alert(
			"You've decided to aid the people of Kelindral, congratulations on taking the first step to becoming a hero!"
		);
		setLocation("town");
	};

	const turnBack = () => {
		alert(
			"You turn back and leave Kelindral behind... So much for being a hero!"
		);
	};

	return (
		<main className="welcome">
			<h1>React RPG</h1>
			<h2>Where heroes are made!</h2>

			<p>
				Greetings, and welcome to Kelindral! Once a town bustling with traders
				from across the world, all you see now is a ghost town with only a few
				buildings still standing. The few townsfolk who remain look to you with
				hope in their eyes. Will you be a hero, or become another skeleton
				serving the darkness?
			</p>

			<button onClick={startAdventure}>Start Adventure!</button>
			<button onClick={turnBack}>Turn Back...</button>
		</main>
	);
};

export default Welcome;
