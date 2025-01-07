import { useState } from 'react'
import styled from 'styled-components'
import color from '../../design-system/colors/color'
import OpponentToggle from './OpponentToggle'
import HustleRoom from './HustleRoom'
import Header from '../../design-system/components/Header'
import NavigationBar from '../../design-system/components/NavigationBar'

import user2 from '../../assets/icons/icUser2Normal.svg'
import user3 from '../../assets/icons/icUser3Normal.svg'
import user4 from '../../assets/icons/icUser4Normal.svg'

const HustleRoomListPageComp = () => {
	const [selectedMode, setSelectedMode] = useState<'1:N' | '1:1'>('1:N')

	const hustleRooms = [
		{
			title: '일주일 15km 걷기',
			deadline: '2월 27일까지',
			frequency: '7일마다',
			participants: [
				{ image: user2, alt: 'User 1' },
				{ image: user3, alt: 'User 2' },
				{ image: user4, alt: 'User 3' },
			],
			otherParticipantsCount: 4,
		},
		{
			title: '기상 후 책 5페이지 읽기',
			deadline: '5월 4일까지',
			frequency: '매일',
			participants: [
				{ image: user2, alt: 'User 1' },
				{ image: user3, alt: 'User 2' },
				{ image: user4, alt: 'User 3' },
			],
			otherParticipantsCount: 15,
		},
		{
			title: '매일 아침 6시에 일어나기',
			deadline: '1월 1일까지',
			frequency: '매일',
			participants: [
				{ image: user2, alt: 'User 1' },
				{ image: user3, alt: 'User 2' },
				{ image: user4, alt: 'User 3' },
			],
			otherParticipantsCount: 105,
		},
	]

	return (
		<Root>
			<Header title="허슬 참여" />

			<ToggleWrapper>
				<OpponentToggle selected={selectedMode} onSelect={setSelectedMode} />
			</ToggleWrapper>

			<RoomList>
				{hustleRooms.map((room, index) => (
					<HustleRoom key={index} {...room} onClick={() => console.log('Room clicked:', room.title)} />
				))}
			</RoomList>
			<NavigationBar />
		</Root>
	)
}

export default HustleRoomListPageComp

const Root = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${color.gray100};
	padding: 20px;
`

const ToggleWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 16px 0;
`

const RoomList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding-bottom: 16px;
`
