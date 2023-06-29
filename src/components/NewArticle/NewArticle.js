import styles from "./NewArticle.module.css";

function NewArticle({ onclick }) {
	return (
		<button onClick={onclick} className={styles.newarticle}>
			+
		</button>
	);
}

export default NewArticle;
