import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { remove } from "../store";
import { useEffect } from "react";

const Detail = () => {
	const { id } = useParams();
	const articles = useSelector((state) => state);
	const article = articles.find((item) => item.id === parseInt(id));
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!article) {
			return navigate("/");
		}
	}, []);

	return (
		<div className={styles.article}>
			<h1>{article?.title}</h1>
			<h3>{article?.date}</h3>
			<p>{article?.content}</p>
			<div className={styles.buttonbar}>
				<button
					className={styles.edit}
					onClick={() => navigate(`/edit/${parseInt(id)}`)}
				>
					수정
				</button>
				<button
					className={styles.remove}
					onClick={() => {
						dispatch(remove(parseInt(id)));
						return navigate("/");
					}}
				>
					삭제
				</button>
			</div>
		</div>
	);
};

export default Detail;
