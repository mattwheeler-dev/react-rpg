const Town = () => {
	return (
		<main className="town">
			<h1>Kelindral</h1>
			<p>
				You see a (mostly) intact inn named {`'`}The Drunken Dragon{`'`} where
				you should be able to find rest when needed.
				<br />
				Luckily for you, one of the remaining townsfolk is a merchant named
				Volimar who has set up shop in the town square. You can buy and sell
				items here to help you on your journey.
				<br />
				At the western edge of town, you see the entrance to the Kelindral
				Caves. Once a reliable source of silver and gems that helped Kelindral
				become a prosperous town, the caves are now overrun with monsters. There
				is an ominous purple glow coming from the entrance, and you can hear the
				sounds of creatures echoing from within.
			</p>
			<button>The Drunken Dragon</button>
			<button>Volimar{`'`}s Shop</button>
			<button>Kelindral Caves</button>
		</main>
	);
};

export default Town;
