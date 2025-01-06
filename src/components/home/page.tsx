import styled from 'styled-components'
import color from '../../design-system/colors/color'

import NavigationBar from '../../design-system/components/NavigationBar'
import HomeProfileCard from './HomeProfileCard'
import HomeOneToOne from './HomeOneToOne'
import HomeOneToN from './HomeOneToN'

export function HomePageComp() {
	return (
		<Root>
			<HeaderText>
				회원님
				<br />
				오늘도 열심히 허슬하세요
			</HeaderText>
			<HomeProfileCard />
			<HomeOneToOne />
			<HomeOneToN />
			<NavigationBar />
		</Root>
	)
}

export default HomePageComp

const Root = styled.div`
	background-color: ${color.gray100};
	min-height: 100vh;
	color: white;
	padding: 75px 14px;
`

const HeaderText = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`
