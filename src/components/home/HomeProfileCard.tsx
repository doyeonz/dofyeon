import styled from 'styled-components'

import IcRankDiamonds from '../../design-system/icons/profileRank/icRankDiamonds.svg'
import btnShareNormal from '../../design-system/icons/btnShareNormal.svg'
import color from '../../design-system/colors/color'

const HomeProfileCard = () => {
	return (
		<Root>
			<ProfileInfo>
				<ProfileRankImage src={IcRankDiamonds} />
				<div>
					<div style={{ opacity: 0.7 }}>회원등급</div>
					<div style={{ fontSize: '20px' }}>다이아몬드</div>
				</div>
				<ProfileShareBtn src={btnShareNormal} />
			</ProfileInfo>
			<Stats>
				<StatsDetail>
					<div style={{ fontSize: '14px', fontWeight: 'medium', color: color.gray50 }}>완료한 허슬</div>
					<div style={{ fontSize: '20px', fontWeight: 'bold', margin: '4px 0 0 0' }}>12</div>
				</StatsDetail>
				<StatsDetail>
					<div style={{ fontSize: '14px', fontWeight: 'medium', color: color.gray50 }}>진행 중인 허슬</div>
					<div style={{ fontSize: '20px', fontWeight: 'bold', margin: '4px 0 0 0' }}>2</div>
				</StatsDetail>
			</Stats>
		</Root>
	)
}

export default HomeProfileCard

const Root = styled.div`
	background-color: ${color.gray90};
	border-radius: 16px;
	padding: 20px;
	margin-bottom: 16px;
`
const ProfileInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`
const ProfileRankImage = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 16px;
`
const ProfileShareBtn = styled.img`
	display: block;
	margin-left: auto;
	cursor: pointer;
`
const Stats = styled.div`
	display: flex;
	gap: 20px;
`
const StatsDetail = styled.div`
	border-left: 2.5px solid #646468;
	padding-left: 12px;
`
