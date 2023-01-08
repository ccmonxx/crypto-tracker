import { useParams } from "react-router-dom";

interface IcoinId {
	coinId: string;
}

function Coin() {
	const { coinId } = useParams<IcoinId>();
	return (
		<>
			<h2>Coin: {coinId}</h2>
		</>
	);
}

export default Coin;
