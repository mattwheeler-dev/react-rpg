import { useContext, useState } from "react";
import { AppContext } from "../App";
import "../assets/styles/Pack.css";

const Pack = () => {
	const { inventory } = useContext(AppContext);
	const [showPack, setShowPack] = useState(false);

	const equipItem = (e) => {
		const itemId = e.target.parentElement.id;
		const targetItem = inventory.filter((item) => item.id == itemId)[0];
		const targetSlot = targetItem.slot;
		const replaced = inventory.filter((item) => item.slot == targetSlot);

		// Unequip current item if any
		if (replaced.length > 1) {
			replaced.forEach((item) => {
				if (item.id != targetItem.id) {
					item.equipped = false;
				}
			});
		}

		targetItem.equipped = true;
	};

	const items = inventory.map((item) => (
		<div
			key={item.id}
			id={item.id}
			className={item.equipped ? "pack-item equipped" : "pack-item"}
		>
			<img src={item.img} alt={item.name} />
			<p>{item.name}</p>
			<p className="item-slot">{item.slot}</p>
			{item.type == "weapon" && (
				<p className="item-stat">Damage: {item.damage}</p>
			)}
			{item.type == "armor" && <p className="item-stat">Armor: {item.armor}</p>}
			{item.equipped ? (
				<p className="equipped-text">Equipped</p>
			) : (
				<button className="equip-btn" onClick={equipItem}>
					Equip
				</button>
			)}
		</div>
	));

	const togglePack = () => {
		setShowPack(!showPack);
	};

	return (
		<>
			<button
				className="action-bar-icon open-pack"
				onClick={togglePack}
			></button>
			<div className={showPack ? "pack open" : "pack"}>
				<h3>Inventory</h3>
				{items}
				<button onClick={togglePack} className="close-pack">
					X
				</button>
			</div>
		</>
	);
};

export default Pack;
