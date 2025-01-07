import styled from 'styled-components'
import color from '../../design-system/colors/color'

interface Participant {
	image: string
	alt: string
}

interface HustleRoomProps {
	title: string
	deadline: string
	frequency: string
	participants: Participant[]
	otherParticipantsCount: number
	onClick?: () => void
}

const HustleRoom = ({ title, deadline, frequency, participants, otherParticipantsCount, onClick }: HustleRoomProps) => {
	return (
		<Root onClick={onClick}>
			<ContentWrapper>
				<Title>{title}</Title>
				<SubInfo>
					{deadline} • {frequency}
				</SubInfo>
				<ParticipantsWrapper>
					<AvatarGroup>
						{participants.slice(0, 3).map((participant, index) => (
							<AvatarWrapper key={index} $index={index}>
								<Avatar src={participant.image} alt={participant.alt} />
							</AvatarWrapper>
						))}
					</AvatarGroup>
					<ParticipantCount>외 {otherParticipantsCount}명</ParticipantCount>
				</ParticipantsWrapper>
			</ContentWrapper>
		</Root>
	)
}

export default HustleRoom

const Root = styled.div`
	width: 100%;
	background-color: ${color.gray80};
	border-radius: 12px;
	padding: 20px;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: ${color.gray70};
	}
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const Title = styled.h3`
	color: ${color.white};
	font-size: 18px;
	font-weight: 600;
	margin: 0;
`

const SubInfo = styled.div`
	color: ${color.gray40};
	font-size: 14px;
`

const ParticipantsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 24px;
`

const AvatarGroup = styled.div`
	display: flex;
	align-items: center;
`

const AvatarWrapper = styled.div<{ $index: number }>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid ${color.gray80};
	overflow: hidden;
	margin-left: ${(props) => (props.$index === 0 ? '0' : '-8px')};
	position: relative;
	z-index: ${(props) => 3 - props.$index};
`

const Avatar = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const ParticipantCount = styled.span`
	color: ${color.gray40};
	font-size: 14px;
`
