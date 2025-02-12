import slimeImg from "../assets/images/monsters/slime1.png";
// import salamanderImg from "../assets/images/monsters/salamander1.png";
// import gloomspinnerImg from "../assets/images/monsters/gloomspinner1.png";
// import doomhoundImg from "../assets/images/monsters/doomhound1.png";
// import shriekfangImg from "../assets/images/monsters/shriekfang1.png";

const MonsterFactory = (monster) => {
	switch (monster) {
		case "Dread Slime":
			return {
				id: "monster1",
				name: monster,
				health: 10,
				attack: 2,
				xp: 5,
				img: slimeImg,
				altText: "Slime monster",
			};
		case "Abyssal Salamander":
			return {
				id: "monster2",
				name: monster,
				health: 13,
				attack: 3,
				xp: 7,
				// img: salamanderImg,
				altText: "Salamander monster",
			};
		case "Gloomspinner":
			return {
				id: "monster3",
				name: monster,
				health: 15,
				attack: 4,
				xp: 10,
				// img: gloomspinnerImg,
				altText: "Spider monster",
			};
		case "Doomhound":
			return {
				id: "monster4",
				name: monster,
				health: 20,
				attack: 6,
				xp: 13,
				// img: doomhoundImg,
				altText: "Doomhound monster",
			};
		case "Shriekfang":
			return {
				id: "monster5",
				name: monster,
				health: 25,
				attack: 7,
				xp: 15,
				// img: shriekfangImg,
				altText: "Shriekfang monster",
			};
	}
};

export default MonsterFactory;
