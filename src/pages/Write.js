import { useNavigate } from "react-router-dom";
import styles from "./Write.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

function Write() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const today = new Date();

	return (
		<form
			className={styles.container}
			onSubmit={() => {
				dispatch(
					add({
						title,
						date: `${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일 ${today.getHours()}:${
							today.getMinutes() > 9
								? today.getMinutes()
								: "0" + today.getMinutes()
						}`,
						content,
						id: Date.now(),
					})
				);
				navigate("/");
			}}
		>
			<input
				type="text"
				required
				maxLength={15}
				placeholder="제목을 입력하세요"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				id="title"
			/>
			<input
				type="text"
				required
				placeholder="내용을 입력하세요"
				value={content}
				onChange={(event) => setContent(event.target.value)}
				id="content"
			/>
			<div>
				<button id="cancel" type="reset" onClick={() => navigate("/")}>
					취소
				</button>
				<button id="confirm" type="submit">
					저장
				</button>
			</div>
		</form>
	);
}

export default Write;
