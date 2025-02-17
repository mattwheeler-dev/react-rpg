import slimeImg1 from "../assets/images/monsters/slime1.png";

const MonsterFactory = (monster) => {
	switch (monster) {
		case "Dread Slime":
			return {
				id: "monster1",
				name: monster,
				health: 10,
				maxHealth: 10,
				attack: 2,
				xp: 5,
				img: slimeImg1,
			};
	}
};

export default MonsterFactory;
