import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Article from "../components/Article/Article";
import styles from "./Main.module.css";
import NewArticle from "../components/NewArticle/NewArticle";

function Main() {
	const navigate = useNavigate();
	const newArticle = () => {
		navigate("/write");
	};
	const articles = useSelector((state) => state);

	return (
		<div className={styles.main}>
			<NewArticle onclick={newArticle} />
			{articles.map((article) => (
				<Article key={article.id} {...article} />
			))}
		</div>
	);
}

export default Main;
