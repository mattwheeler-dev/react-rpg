import NavControls from "../components/NavControls";

const CaveEntrance = () => {
	return (
		<main className="cave-entrance">
			<h1>Kelindral Caves</h1>
			<p>
				You arrive at the entrance to the Kelindral Caves. The caves have never
				been so quiet, nor have they ever been so dangerous. The purple glow
				casts twisted shadows, but the interior of the cave remains shrouded in
				darkness, hiding whatever monstrosities lie within.
			</p>
			<NavControls />
		</main>
	);
};

export default CaveEntrance;
