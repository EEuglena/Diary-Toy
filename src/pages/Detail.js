import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	console.dir(id);
	return <>{id}</>;
};

export default Detail;
