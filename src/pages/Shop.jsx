import Controls from "../components/Controls";
import Items from "../components/Items";
import "../assets/styles/Items.css";

const itemCards = Items.map((item) => {
	if (item.inPack) {
		return;
	} else {
		return (
			<div key={item.id} className="shop-item">
				<p>{item.name}</p>
				<p className="item-slot">{item.slot}</p>
				{item.type == "weapon" && (
					<p className="item-stat">Damage: {item.damage}</p>
				)}
				{item.type == "armor" && (
					<p className="item-stat">Armor: {item.armor}</p>
				)}
				<p>{item.value} Gold</p>
			</div>
		);
	}
});

const Shop = () => {
	return (
		<main className="shop">
			<h1>Volimar{`'`}s Shop</h1>
			{itemCards}
			<Controls />
		</main>
	);
};

export default Shop;
