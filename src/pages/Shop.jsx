import { useContext } from "react";
import { AppContext } from "../App";
import NavControls from "../components/NavControls";
import Items from "../components/Items";
import { useSound } from "use-sound";
import buySound from "../assets/sounds/buy.mp3";
import "../assets/styles/Shop.css";

const Shop = () => {
	const { playerStats, setPlayerStats, inventory, setInventory } =
		useContext(AppContext);
	const [playBuySound] = useSound(buySound);

	const itemCards = Items.map((item) => {
		if (item.inPack) {
			return;
		} else {
			return (
				<div key={item.id} className="shop-item">
					<img src={item.img} alt={item.name} />
					<p>{item.name}</p>
					<p className="item-slot">{item.slot}</p>
					{item.type == "weapon" && (
						<p className="item-stat">Damage: {item.damage}</p>
					)}
					{item.type == "armor" && (
						<p className="item-stat">Armor: {item.armor}</p>
					)}
					<p>Cost: {item.value} Gold</p>
					<button
						className="buy-btn"
						disabled={item.value > playerStats.gold}
						onClick={() => {
							playBuySound();
							item.inPack = true;
							setPlayerStats({
								...playerStats,
								gold: playerStats.gold - item.value,
							});
							setInventory([...inventory, item]);
						}}
					>
						Buy
					</button>
				</div>
			);
		}
	});

	return (
		<main className="shop">
			<h1>Volimar{`'`}s Shop</h1>
			<section className="shop-container">{itemCards}</section>
			<NavControls />
		</main>
	);
};

export default Shop;
