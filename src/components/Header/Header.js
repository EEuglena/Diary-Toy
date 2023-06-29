import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
	const navigate = useNavigate();

	return (
		<div className={styles.header}>
			<div className={styles.titlebox} onClick={() => navigate("/")}>
				<p>작은 일기장</p>
			</div>
		</div>
	);
}

export default Header;
