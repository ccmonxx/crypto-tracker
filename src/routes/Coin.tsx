import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	max-width: 480px;
	padding: 0px 20px;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 15vh;
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
	display: block;
	text-align: center;
`;

interface IcoinId {
	coinId: string;
}

interface IState {
	name: string;
}

interface InfoData {
	id: "string";
	name: "string";
	symbol: "string";
	rank: "number";
	is_new: "boolean";
	is_active: "boolean";
	type: "string";
	logo: "string";
	description: "string";
	message: "string";
	open_source: "boolean";
	started_at: "string";
	development_status: "string";
	hardware_wallet: "boolean";
	proof_type: "string";
	org_structure: "string";
	hash_algorithm: "string";
	first_data_at: "string";
	last_data_at: "string";
}

interface PriceData {
	id: "string";
	name: "string";
	symbol: "string";
	rank: "number";
	circulating_supply: "number";
	total_supply: "number";
	max_supply: "number";
	beta_value: "number";
	first_data_at: "string";
	last_updated: "string";
	quotes: {
		USD: {
			ath_date: "string";
			ath_price: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_1h: number;
			percent_change_1y: number;
			percent_change_6h: number;
			percent_change_7d: number;
			percent_change_12h: number;
			percent_change_15m: number;
			percent_change_24h: number;
			percent_change_30d: number;
			percent_change_30m: number;
			percent_from_price_ath: number;
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
		};
	};
}

function Coin() {
	const [loading, setLoading] = useState(true);
	const { coinId } = useParams<IcoinId>();
	const { state } = useLocation<IState>();

	const [info, setInfo] = useState<InfoData>();
	const [priceInfo, setPriceInfo] = useState<PriceData>();

	// ✓ async-await 한줄표기
	useEffect(() => {
		(async () => {
			// const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
			// const json = await response.json();
			const infoData = await (
				await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
			).json();
			const priceData = await await (
				await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
			).json();

			setInfo(infoData);
			setPriceInfo(priceData);

			console.log(infoData);
			console.log(priceData);
		})();
	}, [coinId]);

	return (
		<Container>
			<Header>
				{/* ✓ state.name 존재한다면 보여주고, 아니면 Loading.. */}
				<Title>{state.name || "Loading..."}</Title>
			</Header>
			{loading ? <Loader>Loading...</Loader> : null}
		</Container>
	);
}

export default Coin;
