import styled from 'styled-components'
import color from '../../design-system/colors/color'

import IcFlagNormal from '../../design-system/icons/btnFlagNormal.svg'
import BtnArrowRight from '../../design-system/icons/btnArrowRight.svg'

const MoreVisitHustle = () => {
	return (
		<Root>
			<OnToOneImage src={IcFlagNormal} />
			<div>
				<div style={{ fontSize: '20px', fontWeight: 700 }}>참여했던 허슬</div>
				<div style={{ fontSize: '14px', fontWeight: 400, color: color.gray50 }}>총 27개</div>
			</div>
			<OnToOneMoreBtn src={BtnArrowRight} />
		</Root>
	)
}

export default MoreVisitHustle

const Root = styled.div`
	background-color: ${color.gray90};
	border-radius: 16px;
	padding: 16px;
	margin-bottom: 204px;
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
