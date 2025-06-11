// Import all monster variant images
// Dreadhare
import dreadhare1 from "../assets/images/monsters/dreadhare1.png";
import dreadhare2 from "../assets/images/monsters/dreadhare2.png";
import dreadhare3 from "../assets/images/monsters/dreadhare3.png";
import dreadhare4 from "../assets/images/monsters/dreadhare4.png";
import dreadhare5 from "../assets/images/monsters/dreadhare5.png";
// Blightbeak
import blightbeak1 from "../assets/images/monsters/blightbeak1.png";
import blightbeak2 from "../assets/images/monsters/blightbeak2.png";
import blightbeak3 from "../assets/images/monsters/blightbeak3.png";
import blightbeak4 from "../assets/images/monsters/blightbeak4.png";
// Grimtail
import grimtail1 from "../assets/images/monsters/grimtail1.png";
import grimtail2 from "../assets/images/monsters/grimtail2.png";
import grimtail3 from "../assets/images/monsters/grimtail3.png";
import grimtail4 from "../assets/images/monsters/grimtail4.png";
// Dommwing
import doomwing1 from "../assets/images/monsters/doomwing1.png";
import doomwing2 from "../assets/images/monsters/doomwing2.png";
import doomwing3 from "../assets/images/monsters/doomwing3.png";
import doomwing4 from "../assets/images/monsters/doomwing4.png";
// Muckfiend
import muckfiend1 from "../assets/images/monsters/muckfiend1.png";
import muckfiend2 from "../assets/images/monsters/muckfiend2.png";
import muckfiend3 from "../assets/images/monsters/muckfiend3.png";
// Gloomscale
import gloomscale1 from "../assets/images/monsters/gloomscale1.png";
import gloomscale2 from "../assets/images/monsters/gloomscale2.png";
import gloomscale3 from "../assets/images/monsters/gloomscale3.png";
// Rotpinch
import rotpinch1 from "../assets/images/monsters/rotpinch1.png";
import rotpinch2 from "../assets/images/monsters/rotpinch2.png";
import rotpinch3 from "../assets/images/monsters/rotpinch3.png";
// Shellgore
import shellgore1 from "../assets/images/monsters/shellgore1.png";
import shellgore2 from "../assets/images/monsters/shellgore2.png";
import shellgore3 from "../assets/images/monsters/shellgore3.png";
import shellgore4 from "../assets/images/monsters/shellgore4.png";
// Nightquill
import nightquill1 from "../assets/images/monsters/nightquill1.png";
import nightquill2 from "../assets/images/monsters/nightquill2.png";
import nightquill3 from "../assets/images/monsters/nightquill3.png";
import nightquill4 from "../assets/images/monsters/nightquill4.png";

// Image arrays for variants
const dreadhareImgs = [
	dreadhare1,
	dreadhare2,
	dreadhare3,
	dreadhare4,
	dreadhare5,
];
const blightbeakImgs = [blightbeak1, blightbeak2, blightbeak3, blightbeak4];
const grimtailImgs = [grimtail1, grimtail2, grimtail3, grimtail4];
const doomwingImgs = [doomwing1, doomwing2, doomwing3, doomwing4];
const muckfiendImgs = [muckfiend1, muckfiend2, muckfiend3];
const gloomscaleImgs = [gloomscale1, gloomscale2, gloomscale3];
const rotpinchImgs = [rotpinch1, rotpinch2, rotpinch3];
const shellgoreImgs = [shellgore1, shellgore2, shellgore3, shellgore4];
const nightquillImgs = [nightquill1, nightquill2, nightquill3, nightquill4];

const monsters = {
	Dreadhare: {
		name: "Dreadhare",
		health: 7,
		maxHealth: 7,
		attack: 1,
		xp: 3,
		images: dreadhareImgs,
	},
	Blightbeak: {
		name: "Blightbeak",
		health: 9,
		maxHealth: 9,
		attack: 1,
		xp: 3,
		images: blightbeakImgs,
	},
	Grimtail: {
		name: "Grimtail",
		health: 9,
		maxHealth: 9,
		attack: 2,
		xp: 4,
		images: grimtailImgs,
	},
	Doomwing: {
		name: "Doomwing",
		health: 11,
		maxHealth: 11,
		attack: 2,
		xp: 4,
		images: doomwingImgs,
	},
	Muckfiend: {
		name: "Muckfiend",
		health: 11,
		maxHealth: 11,
		attack: 3,
		xp: 5,
		images: muckfiendImgs,
	},
	Gloomscale: {
		name: "Gloomscale",
		health: 13,
		maxHealth: 13,
		attack: 3,
		xp: 5,
		images: gloomscaleImgs,
	},
	Rotpinch: {
		name: "Rotpinch",
		health: 13,
		maxHealth: 13,
		attack: 4,
		xp: 6,
		images: rotpinchImgs,
	},
	Shellgore: {
		name: "Shellgore",
		health: 15,
		maxHealth: 15,
		attack: 4,
		xp: 6,
		images: shellgoreImgs,
	},
	Nightquill: {
		name: "Nightquill",
		health: 15,
		maxHealth: 15,
		attack: 5,
		xp: 7,
		images: nightquillImgs,
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
