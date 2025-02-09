import Controls from "../components/Controls";
import Items from "../components/Items";
import "../assets/styles/Shop.css";

const itemCards = Items.map((item) => {
	if (item.inPack) {
		return;
	} else {
		return (
			<div key={item.id} className="shop-item">
				<h4>{item.name}</h4>
				<p>{item.slot}</p>
				{item.type == "weapon" && <p>Damage: {item.damage}</p>}
				{item.type == "armor" && <p>Armor: {item.armor}</p>}
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
