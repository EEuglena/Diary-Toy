import Article from "../components/Article/Article";
import styles from "./Main.module.css";
import { useNavigate } from "react-router-dom";
import NewArticle from "../components/NewArticle/NewArticle";
import { useEffect } from "react";

function Main() {
	const navigate = useNavigate();
	const newArticle = () => {
		navigate("/write");
	};

	return (
		<div className={styles.main}>
			<NewArticle onclick={newArticle} />
			<Article title="Lorem Ipsum" date="2023.06.23 16:38" />
			<Article title="Lorem Ipsum" date="2023.06.23 16:38" />
			<Article title="Lorem Ipsum" date="2023.06.23 16:38" />
			<Article title="Lorem Ipsum" date="2023.06.23 16:38" />
		</div>
	);
}

export default Main;
