import styled from 'styled-components'
import NavigationBar from '../../design-system/components/NavigationBar'
import ProfileCard from './ProfileCard'
import OneToOne from './OneToOne'
import OneToN from './OneToN'

export function HomePageComp() {
	return (
		<AppContainer>
			<HeaderText>
				회원님
				<br />
				오늘도 열심히 허슬하세요
			</HeaderText>
			<ProfileCard />
			<OneToOne />
			<OneToN />
			<NavigationBar />
		</AppContainer>
	)
}

export default HomePageComp

const AppContainer = styled.div`
	background-color: #1a1a1a;
	min-height: 100vh;
	color: white;
	padding: 75px 14px;
`

const HeaderText = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`
