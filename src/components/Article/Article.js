import PropTypes from "prop-types";
import styles from "./Article.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../../store";

function Article({ title, date, content, id }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className={styles.article} onClick={() => navigate(`${id}`)}>
			<h1>{title}</h1>
			<h3>{date}</h3>
			<p>{content}</p>
			<button
				onClick={(event) => {
					event.preventDefault();
					dispatch(remove(parseInt(id)));
				}}
			>
				X
			</button>
		</div>
	);
}

Article.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};

export default Article;
