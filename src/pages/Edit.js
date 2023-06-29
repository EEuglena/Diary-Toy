import { useNavigate, useParams } from "react-router-dom";
import styles from "./Write.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store";

function Edit() {
	const { id } = useParams();
	const articles = useSelector((state) => state);
	const article = articles.find((item) => item.id === parseInt(id));
	const [title, setTitle] = useState(article?.title);
	const [content, setContent] = useState(article?.content);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!article) {
			return navigate("/");
		}
	}, []);

	return (
		<form
			className={styles.container}
			onSubmit={(event) => {
				event.preventDefault();
				dispatch(
					edit({
						...article,
						title,
						content,
					})
				);
				navigate(-1);
			}}
		>
			<input
				type="text"
				required
				maxLength={15}
				placeholder="제목을 입력하세요"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				className={styles.title}
			/>
			<textarea
				type="text"
				required
				placeholder="내용을 입력하세요"
				value={content}
				onChange={(event) => setContent(event.target.value)}
				className={styles.content}
			/>
			<div>
				<button
					className={styles.cancel}
					type="reset"
					onClick={() => navigate(-1)}
				>
					취소
				</button>
				<button className={styles.confirm} type="submit">
					저장
				</button>
			</div>
		</form>
	);
}

export default Edit;
