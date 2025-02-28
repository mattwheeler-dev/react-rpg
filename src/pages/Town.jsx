import NavControls from "../components/NavControls";

const Town = () => {
	return (
		<main className="town">
			<h1>Emberhollow</h1>
			<p>
				Luckily the town{`'`}s inn, The Drowsy Dragon, is still standing and you
				should be able to rest there when needed.
				<br />
				<br />
				One of the few remaining townsfolk is a merchant named Volimar, who
				continues to run his shop despite the danger.
				<br />
				<br />
				At the western edge of town, you see the entrance to Emberhollow Caves.
				Once a reliable source of silver and gems that helped Emberhollow become
				a prosperous town, the caves are now overrun with monsters. There is an
				ominous purple glow coming from the entrance, and you can hear the
				sounds of creatures echoing from within.
			</p>
			<NavControls />
		</main>
	);
};

export default Town;
