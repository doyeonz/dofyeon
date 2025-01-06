import styled from 'styled-components'
import color from '../../../design-system/colors/color'
import IcPersonNormal from '../../../design-system/icons/icPersonNormal.svg'

interface OpponentOptionProps {
	title: string
	description: string
	isSelected: boolean
	isHovered: boolean
	onHover: (value: boolean) => void
	onSelect: () => void
}

const OpponentOption = ({ title, description, isSelected, isHovered, onHover, onSelect }: OpponentOptionProps) => {
	return (
		<Root $isSelected={isSelected} $isHovered={isHovered} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} onClick={onSelect}>
			<IconWrapper>
				<img src={IcPersonNormal} alt="User icon" />
			</IconWrapper>
			<TextContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</TextContainer>
		</Root>
	)
}

export default OpponentOption

const Root = styled.div<{ $isSelected: boolean; $isHovered: boolean }>`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 16px;
	background-color: ${(props) => (props.$isSelected ? color.gray80 : color.gray100)};
	border-radius: 12px;
	cursor: pointer;
	border: 1px solid ${(props) => (props.$isSelected ? color.gray80 : color.gray50)};
	transition: all 0.2s ease-in-out;
`

const IconWrapper = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 24px;
		height: 24px;
	}
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

const Title = styled.h3`
	color: ${color.gray10};
	font-size: 18px;
	font-weight: 700;
`

const Description = styled.p`
	color: ${color.gray50};
	font-size: 14px;
	font-weight: 400;
`
