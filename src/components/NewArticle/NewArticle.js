import styles from "./NewArticle.module.css";

function NewArticle({ onclick }) {
	return (
		<div onClick={onclick} className={styles.newarticle}>
			Add New Article
		</div>
	);
}

export default NewArticle;
