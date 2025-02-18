import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import "../assets/styles/Pack.css";

const Pack = () => {
	const { setPlayerStats, inventory, setInventory } = useContext(AppContext);
	const [showPack, setShowPack] = useState(false);

	useEffect(() => {
		setPlayerStats((prevStats) => {
			const totalArmor = inventory
				.filter((item) => item.equipped && item.armor)
				.reduce((sum, item) => sum + item.armor, 0);

			if (prevStats.armor === totalArmor) return prevStats;

			return { ...prevStats, armor: totalArmor };
		});
	}, [inventory, setPlayerStats]);

	const equipItem = (e) => {
		const itemId = e.target.parentElement.id;

		setInventory((prevInventory) => {
			const targetSlot = prevInventory.find((i) => i.id == itemId)?.slot;

			return prevInventory.map((item) =>
				item.slot === targetSlot
					? { ...item, equipped: item.id == itemId }
					: item
			);
		});
	};

	const items = inventory.map((item) => {
		if (!item.equipped) {
			return (
				<div key={item.id} id={item.id} className="pack-item">
					<img src={item.img} alt={item.name} />
					<p>{item.name}</p>
					<p className="item-slot">{item.slot}</p>
					{item.type == "weapon" && (
						<p className="item-stat">Damage: {item.damage}</p>
					)}
					{item.type == "armor" && (
						<p className="item-stat">Armor: {item.armor}</p>
					)}
					<button className="equip-btn" onClick={equipItem}>
						Equip
					</button>
				</div>
			);
		}
	});

	const togglePack = () => {
		setShowPack(!showPack);
	};

	return (
		<>
			<button
				className={`action-bar-icon open-pack ${showPack ? "active" : ""}`}
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
