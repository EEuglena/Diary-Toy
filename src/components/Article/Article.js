import PropTypes from "prop-types";
import styles from "./Article.module.css";

function Article({ title, date, content }) {
	if (!content)
		content =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo eu metus ultricies faucibus sit amet non nulla. Cras vestibulum elit a volutpat viverra. Pellentesque convallis egestas nisi. Aliquam congue elit eget eros tempor, ut scelerisque nisi sagittis. Suspendisse potenti. Cras lorem enim, cursus in magna a, consequat lacinia ante. Donec eget ipsum id tellus dapibus sodales in non urna. Nunc facilisis, lectus a venenatis sagittis, metus enim consequat massa, a volutpat tellus justo eget risus. Vivamus dictum mollis gravida. Integer laoreet lectus id tincidunt rhoncus. Praesent vitae risus lacus. Proin id justo vel elit mollis cursus sed ut.";
	return (
		<div className={styles.article}>
			<h1>{title}</h1>
			<h3>{date}</h3>
			<p>{content}</p>
		</div>
	);
}

Article.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};

export default Article;
