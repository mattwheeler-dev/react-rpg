import { useContext, useState } from "react";
import { AppContext } from "../App";
import "../assets/styles/Items.css";

const Pack = () => {
	const [showPack, setShowPack] = useState(false);
	const { inventory } = useContext(AppContext);

	const togglePack = () => {
		setShowPack(!showPack);
	};

	const items = inventory.map((item) => {
		return (
			<div
				key={item.id}
				className={item.equipped ? "pack-item equipped" : "pack-item"}
			>
				{/* <img src={} alt={} /> */}
				<p>{item.name}</p>
				<p className="item-slot">{item.slot}</p>
				{item.type == "weapon" && (
					<p className="item-stat">Damage: {item.damage}</p>
				)}
				{item.type == "armor" && (
					<p className="item-stat">Armor: {item.armor}</p>
				)}
				{item.equipped && <p className="equipped-text">Equipped</p>}
			</div>
		);
	});

	return (
		<>
			<button className="open-pack" onClick={togglePack}></button>
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
