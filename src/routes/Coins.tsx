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
		display: flex;
		align-items: center;
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

const Img = styled.img`
	margin-right: 10px;
	width: 35px;
	height: 35px;
`;

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
	const [coins, setCoins] = useState<ICoins[]>([]);
	const [loading, setLoading] = useState(true);

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
							{/* 1. to속성 중 state을 통해 데이터를 지정한 경로의 컴포넌트로 전달 */}
							<Link
								to={{
									pathname: `/${coin.id}`,
									state: { name: coin.name },
								}}
							>
								<Img
									src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
									alt=""
								/>
								{coin.name}
							</Link>
						</Coin>
					))}
				</ul>
			)}
		</Container>
	);
}

export default Coins;
