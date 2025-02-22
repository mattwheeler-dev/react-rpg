import woodAxe from "../assets/images/items/woodcutting-axe.png";
import ironSword from "../assets/images/items/iron-sword.png";
import raggedShirt from "../assets/images/items/ragged-shirt.png";
import raggedPants from "../assets/images/items/ragged-pants.png";
import raggedBoots from "../assets/images/items/ragged-boots.png";
import leatherGloves from "../assets/images/items/leather-gloves.png";
import woodenShield from "../assets/images/items/wooden-shield.png";
import ironGloves from "../assets/images/items/iron-gloves.png";
import ironBoots from "../assets/images/items/iron-boots.png";
import ironPants from "../assets/images/items/iron-pants.png";

const Items = [
	{
		id: 1,
		name: "Woodcutting Axe",
		type: "weapon",
		slot: "main-hand",
		value: 0,
		damage: 3,
		inPack: true,
		equipped: true,
		img: woodAxe,
	},
	{
		id: 2,
		name: "Iron Sword",
		type: "weapon",
		slot: "main-hand",
		value: 10,
		damage: 7,
		inPack: false,
		equipped: false,
		img: ironSword,
	},
	{
		id: 3,
		name: "Wooden Shield",
		type: "armor",
		slot: "off-hand",
		value: 7,
		armor: 2,
		inPack: false,
		equipped: false,
		img: woodenShield,
	},
	{
		id: 4,
		name: "Ragged Shirt",
		type: "armor",
		slot: "torso",
		value: 0,
		armor: 0,
		inPack: true,
		equipped: true,
		img: raggedShirt,
	},
	{
		id: 5,
		name: "Ragged Pants",
		type: "armor",
		slot: "legs",
		value: 0,
		armor: 0,
		inPack: true,
		equipped: true,
		img: raggedPants,
	},
	{
		id: 6,
		name: "Ragged Boots",
		type: "armor",
		slot: "feet",
		value: 0,
		armor: 0,
		inPack: true,
		equipped: true,
		img: raggedBoots,
	},
	{
		id: 7,
		name: "Leather Gloves",
		type: "armor",
		slot: "hands",
		value: 3,
		armor: 1,
		inPack: false,
		equipped: false,
		img: leatherGloves,
	},
	{
		id: 8,
		name: "Iron Gloves",
		type: "armor",
		slot: "hands",
		value: 12,
		armor: 2,
		inPack: false,
		equipped: false,
		img: ironGloves,
	},
	{
		id: 9,
		name: "Iron Boots",
		type: "armor",
		slot: "feet",
		value: 13,
		armor: 2,
		inPack: false,
		equipped: false,
		img: ironBoots,
	},
	{
		id: 10,
		name: "Iron Pants",
		type: "armor",
		slot: "legs",
		value: 20,
		armor: 4,
		inPack: false,
		equipped: false,
		img: ironPants,
	},
];

export default Items;
