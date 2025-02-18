import { useState, useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";
import "../assets/styles/CombatLog.css";

const CombatLog = () => {
	const { combatLog } = useContext(AppContext);
	const [showLog, setShowLog] = useState(false);
	const logRef = useRef(null);

	useEffect(() => {
		if (logRef.current) {
			logRef.current.scrollTop = logRef.current.scrollHeight;
		}
	}, [combatLog]);

	const toggleShowLog = () => {
		setShowLog(!showLog);
	};

	return (
		<>
			<button onClick={toggleShowLog} className="open-combat-log">
				Combat Log
			</button>
			<section
				ref={logRef}
				className={showLog ? "combat-log open" : "combat-log"}
			>
				{combatLog.map((str, i) => (
					<p key={`log${i}`}>{str}</p>
				))}
			</section>
		</>
	);
};

export default CombatLog;
