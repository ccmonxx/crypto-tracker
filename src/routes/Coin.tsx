import { useState } from "react";
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

function Coin() {
	const [loading, setLoading] = useState(true);
	const { coinId } = useParams<IcoinId>();

	// 2. Link-to-state 전달된 데이터를 저장
	const { state } = useLocation<IState>();

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
