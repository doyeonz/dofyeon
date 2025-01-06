import styled from 'styled-components'
import color from '../../design-system/colors/color'

import IcPersonNormal from '../../design-system/icons/icPersonNormal.svg'
import BtnArrowRight from '../../design-system/icons/btnArrowRight.svg'

const OneToOne = () => {
	return (
		<Root>
			<OnToOneImage src={IcPersonNormal} />
			<div>
				<div style={{ fontSize: '20px', fontWeight: 700 }}>1대1 대결</div>
				<div style={{ fontSize: '14px', fontWeight: 400, color: color.gray50 }}>하루에 책 10페이지 읽기 외 2건</div>
			</div>
			<OnToOneMoreBtn src={BtnArrowRight} />
		</Root>
	)
}

export default OneToOne

const Root = styled.div`
	background-color: ${color.gray90};
	border-radius: 16px;
	padding: 16px;
	margin-bottom: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const OnToOneImage = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
`
const OnToOneMoreBtn = styled.img`
	display: block;
	margin-left: auto;
	cursor: pointer;
`
