import { useState } from "react";

const Inventory = () => {
	const [showInventory, setShowInventory] = useState(false);

	const toggleInventory = () => {
		setShowInventory(!showInventory);
	};

	return (
		<div className="inventory">
			<ul>
				<li className="equipped">Woodcutting Axe</li>
				<li className="equipped">Ragged Shirt</li>
				<li className="equipped">Ragged Pants</li>
				<li className="equipped">Ragged Boots</li>
			</ul>
			<button onClick={toggleInventory}>Inventory</button>
		</div>
	);
};

export default Inventory;
