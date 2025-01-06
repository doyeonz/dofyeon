import styled from 'styled-components'
import { useFlow } from '../../stackflow'

import BtnArrowBarLeft from '../icons/btnArrowBarLeft.svg'

interface HeaderProps {
	title: string
}

const Header = ({ title }: HeaderProps) => {
	const { pop } = useFlow()

	const onClick = () => {
		pop()
	}

	return (
		<Root>
			<BackButton src={BtnArrowBarLeft} onClick={onClick} />
			<TitleWrapper>
				<Title>{title}</Title>
			</TitleWrapper>
		</Root>
	)
}

export default Header

const Root = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	margin-top: 40px;
	padding: 14px 14px 8px 14px;
`

const BackButton = styled.img`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
`

const TitleWrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`

const Title = styled.div`
	color: white;
	font-weight: 700;
	font-size: 18px;
	text-align: center;
`
