import styled from 'styled-components'
import color from '../../design-system/colors/color'

import NavigationBar from '../../design-system/components/NavigationBar'
import MoreProfile from './MoreProfile'
import MoreVisitHustle from './MoreVisitHustle'
import ButtonOutline from '../../design-system/components/Button/ButtonOutline'

import ImgUserProfile from '../../assets/images/imgUserProfile.svg'

export function MorePageComp() {
	const handleNext = () => {
		console.log('sfd')
	}

	return (
		<Root>
			<MoreProfile profileImage={ImgUserProfile} username="휘집" />
			<MoreVisitHustle />
			<ButtonOutline onClick={handleNext}>로그아웃</ButtonOutline>
			<WithdrawButton>탈퇴하기</WithdrawButton>
			<NavigationBar />
		</Root>
	)
}

export default MorePageComp

const Root = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${color.gray100};
	padding: 14px;
`
const WithdrawButton = styled.button`
	background: none;
	border: none;
	color: ${color.gray40};
	font-size: 14px;
	cursor: pointer;
	padding: 8px;

	&:hover {
		color: ${color.gray30};
	}
`
