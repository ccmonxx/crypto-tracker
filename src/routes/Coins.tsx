import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	max-width: 480px;
	margin: 0 auto;
	padding: 0px 20px;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 15vh;
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

// const CoinList = styled.ul``;

const Coin = styled.li`
	margin-bottom: 10px;
	border-radius: 15px;
	background-color: #fff;
	color: ${(props) => props.theme.bgColor};

	a {
		display: block;
		padding: 20px;
		transition: color 0.2s ease-in;
	}
	:hover {
		a {
			color: ${(props) => props.theme.accentColor};
		}
	}
`;

const Loader = styled.div`
	display: block;
	text-align: center;
`;

// 2. 생성한 상태에 대한 타입을 정의
interface ICoins {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

function Coins() {
	// 1. API 데이터를 담을 배열 타입의 상태를 생성
	const [coins, setCoins] = useState<ICoins[]>([]);
	const [loading, setLoading] = useState(true);

	// 3. useEffect + 비동기처리
	useEffect(() => {
		(async () => {
			const response = await fetch("https://api.coinpaprika.com/v1/coins");
			const json = await response.json();
			setCoins(json.slice(0, 10));
			setLoading(false);
		})();
	}, []);

	return (
		<Container>
			<Header>
				<Title>Coins</Title>
			</Header>
			{loading ? (
				<Loader>Loading...</Loader>
			) : (
				<ul>
					{coins.map((coin) => (
						<Coin key={coin.id}>
							<Link to={`/${coin.id}`}>{coin.name}</Link>
						</Coin>
					))}
				</ul>
			)}
		</Container>
	);
}

export default Coins;
