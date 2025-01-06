import styled from 'styled-components'

import BtnArrowBarLeft from '../../design-system/icons/btnArrowBarLeft.svg'

const CreateHeader = () => {
	return (
		<Root>
			<BackButton src={BtnArrowBarLeft} />
			<Title>허슬 생성</Title>
		</Root>
	)
}

export default CreateHeader

const Root = styled.div`
	display: flex;
	align-items: center;
	margin-top: 60px;
	margin-bottom: 19px;
	pading: 14px;
`

const BackButton = styled.img`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
`

const Title = styled.div`
	color: white;
	font-weight: 700;
	font-size: 18px;
	margin-left: 20px;
	text-align: center;
	margin: 0 auto;
`
