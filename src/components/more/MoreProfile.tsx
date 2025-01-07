import styled from 'styled-components'
import color from '../../design-system/colors/color'
import BtnSettingsNormal from '../../design-system/icons/btnSetitngNormal.svg'
import IcRankBadge from '../../design-system/icons/profileRank/icRankDiamonds.svg'

interface ProfileSectionProps {
	profileImage: string
	username: string
}

const ProfileSection = ({ profileImage, username }: ProfileSectionProps) => {
	return (
		<Root>
			<SettingsButton>
				<img src={BtnSettingsNormal} alt="Settings" />
			</SettingsButton>

			<ProfileContainer>
				<ProfileImageWrapper>
					<ProfileImage src={profileImage} alt={`${username}'s profile`} />
					<RankBadge>
						<img src={IcRankBadge} alt="Rank badge" />
					</RankBadge>
				</ProfileImageWrapper>

				<Username>{username}</Username>
			</ProfileContainer>
		</Root>
	)
}

export default ProfileSection

const Root = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 16px;
	margin-top: 34px;
`

const SettingsButton = styled.button`
	display: block;
	background: none;
	border: none;
	margin-left: auto;
	cursor: pointer;
`

const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	margin-bottom: 4px;
`

const ProfileImageWrapper = styled.div`
	position: relative;
	width: 120px;
	height: 120px;
`

const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`

const RankBadge = styled.div`
	position: absolute;
	bottom: -16px;
	left: 50%;
	transform: translateX(-50%);
	width: 44px;
	height: 44px;

	img {
		width: 100%;
		height: 100%;
	}
`

const Username = styled.h1`
	color: ${color.white};
	font-size: 24px;
	font-weight: 600;
	margin: 16px 0 0 0;
`
