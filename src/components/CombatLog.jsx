import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";
import "../assets/styles/CombatLog.css";

const CombatLog = () => {
	const { combatLog } = useContext(AppContext);
	const logRef = useRef(null);

	useEffect(() => {
		if (logRef.current) {
			logRef.current.scrollTop = logRef.current.scrollHeight;
		}
	}, [combatLog]);

	return (
		<section ref={logRef} className="combat-log">
			{combatLog.map((str, i) => (
				<p key={`log${i}`}>{str}</p>
			))}
		</section>
	);
};

export default CombatLog;
