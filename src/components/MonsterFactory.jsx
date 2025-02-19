import slime1 from "../assets/images/monsters/slime1.png";
import slime2 from "../assets/images/monsters/slime2.png";
import slime3 from "../assets/images/monsters/slime3.png";

const slimeImgs = [slime1, slime2, slime3];

const MonsterFactory = (monster) => {
	const variant = Math.floor(Math.random() * slimeImgs.length);

	console.log(`Variant: ${variant}`);

	switch (monster) {
		case "Dread Slime":
			return {
				id: "monster1",
				name: monster,
				health: 10,
				maxHealth: 10,
				attack: 2,
				xp: 5,
				img: slimeImgs[variant],
			};
	}
};

export default MonsterFactory;
