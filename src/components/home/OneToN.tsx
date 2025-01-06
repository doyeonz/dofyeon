import styled from 'styled-components'
import color from '../../design-system/colors/color'

import IcPeopleNormal from '../../design-system/icons/icPersonNormal.svg'
import BtnArrowRight from '../../design-system/icons/btnArrowRight.svg'

const OneToN = () => {
	return (
		<Root>
			<OneToNImage src={IcPeopleNormal} />
			<div>
				<div style={{ fontSize: '20px', fontWeight: 700 }}>여러명과 대결</div>
				<div style={{ fontSize: '14px', fontWeight: 400, color: color.gray50 }}>러닝 5km 뛰기 외 1건</div>
			</div>
			<OnToNMoreBtn src={BtnArrowRight} />
		</Root>
	)
}

export default OneToN

const Root = styled.div`
	background-color: ${color.gray90};
	border-radius: 16px;
	padding: 16px;
	margin-bottom: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const OneToNImage = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
`
const OnToNMoreBtn = styled.img`
	display: block;
	margin-left: auto;
	cursor: pointer;
`
