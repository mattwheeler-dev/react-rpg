import bat1 from "../assets/images/monsters/bat1.png";
import bat2 from "../assets/images/monsters/bat2.png";
import bat3 from "../assets/images/monsters/bat3.png";
import bat4 from "../assets/images/monsters/bat4.png";
import bird1 from "../assets/images/monsters/bird1.png";
import bird2 from "../assets/images/monsters/bird2.png";
import bird3 from "../assets/images/monsters/bird3.png";
import bird4 from "../assets/images/monsters/bird4.png";
import bunn1 from "../assets/images/monsters/bunn1.png";
import bunn2 from "../assets/images/monsters/bunn2.png";
import bunn3 from "../assets/images/monsters/bunn3.png";
import bunn4 from "../assets/images/monsters/bunn4.png";
import bunn5 from "../assets/images/monsters/bunn5.png";
import crab1 from "../assets/images/monsters/crab1.png";
import crab2 from "../assets/images/monsters/crab2.png";
import crab3 from "../assets/images/monsters/crab3.png";
import liz1 from "../assets/images/monsters/liz1.png";
import liz2 from "../assets/images/monsters/liz2.png";
import liz3 from "../assets/images/monsters/liz3.png";
import poker1 from "../assets/images/monsters/poker1.png";
import poker2 from "../assets/images/monsters/poker2.png";
import poker3 from "../assets/images/monsters/poker3.png";
import poker4 from "../assets/images/monsters/poker4.png";
import rat1 from "../assets/images/monsters/rat1.png";
import rat2 from "../assets/images/monsters/rat2.png";
import rat3 from "../assets/images/monsters/rat3.png";
import rat4 from "../assets/images/monsters/rat4.png";
import shell1 from "../assets/images/monsters/shell1.png";
import shell2 from "../assets/images/monsters/shell2.png";
import shell3 from "../assets/images/monsters/shell3.png";
import shell4 from "../assets/images/monsters/shell4.png";
import slime1 from "../assets/images/monsters/slime1.png";
import slime2 from "../assets/images/monsters/slime2.png";
import slime3 from "../assets/images/monsters/slime3.png";

// Image arrays for variants
const batImgs = [bat1, bat2, bat3, bat4];
const birdImgs = [bird1, bird2, bird3, bird4];
const bunnImgs = [bunn1, bunn2, bunn3, bunn4, bunn5];
const crabImgs = [crab1, crab2, crab3];
const lizImgs = [liz1, liz2, liz3];
const pokerImgs = [poker1, poker2, poker3, poker4];
const ratImgs = [rat1, rat2, rat3, rat4];
const shellImgs = [shell1, shell2, shell3, shell4];
const slimeImgs = [slime1, slime2, slime3];

const monsters = {
	Bat: {
		name: "Bat",
		health: 11,
		maxHealth: 11,
		attack: 2,
		xp: 4,
		images: batImgs,
	},
	Bird: {
		name: "Bird",
		health: 9,
		maxHealth: 9,
		attack: 1,
		xp: 3,
		images: birdImgs,
	},
	Bunn: {
		name: "Bunn",
		health: 7,
		maxHealth: 7,
		attack: 1,
		xp: 3,
		images: bunnImgs,
	},
	Crab: {
		name: "Crab",
		health: 13,
		maxHealth: 13,
		attack: 4,
		xp: 6,
		images: crabImgs,
	},
	Lizard: {
		name: "Lizard",
		health: 13,
		maxHealth: 13,
		attack: 3,
		xp: 5,
		images: lizImgs,
	},
	Poker: {
		name: "Poker",
		health: 15,
		maxHealth: 15,
		attack: 5,
		xp: 7,
		images: pokerImgs,
	},
	Rat: {
		name: "Rat",
		health: 9,
		maxHealth: 9,
		attack: 2,
		xp: 4,
		images: ratImgs,
	},
	Shell: {
		name: "Shell",
		health: 15,
		maxHealth: 15,
		attack: 4,
		xp: 6,
		images: shellImgs,
	},
	Slime: {
		name: "Slime",
		health: 11,
		maxHealth: 11,
		attack: 3,
		xp: 5,
		images: slimeImgs,
	},
};

const MonsterFactory = (monster) => {
	const variant = Math.floor(Math.random() * monsters[monster].images.length);

	return {
		...monsters[monster],
		img: monsters[monster].images[variant],
	};
};

export default MonsterFactory;
