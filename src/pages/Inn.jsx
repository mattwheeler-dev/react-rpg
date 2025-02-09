import Controls from "../components/Controls";

const Inn = () => {
	return (
		<main className="inn">
			<h1>The Drunken Dragon</h1>
			<p>
				Welcome to The Drunken Dragon! We used to rent out rooms for the night,
				but now we{`'`}re one of the only places in town that still has a roof.
				So long as you don{`'`}t cause any trouble, you{`'`}re welcome to stay
				here for free.
			</p>
			<p className="tip">Tip: Resting at the inn restores your health.</p>

			<Controls />
		</main>
	);
};

export default Inn;
