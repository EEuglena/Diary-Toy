import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.titlebox}>
				<p>작은 일기장</p>
			</div>
		</div>
	);
}

export default Header;
