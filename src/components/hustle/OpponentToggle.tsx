import styled from 'styled-components'
import color from '../../design-system/colors/color'

interface OpponentToggleProps {
	selected: '1:N' | '1:1'
	onSelect: (value: '1:N' | '1:1') => void
}

const OpponentToggle = ({ selected, onSelect }: OpponentToggleProps) => {
	return (
		<Root>
			<ToggleButton $isSelected={selected === '1:N'} onClick={() => onSelect('1:N')}>
				1:N
			</ToggleButton>
			<ToggleButton $isSelected={selected === '1:1'} onClick={() => onSelect('1:1')}>
				1:1
			</ToggleButton>
		</Root>
	)
}

export default OpponentToggle

const Root = styled.div`
	display: flex;
	gap: 8px;
	padding: 4px;
	background-color: ${color.gray80};
	border-radius: 100px;
	width: fit-content;
`

const ToggleButton = styled.button<{ $isSelected: boolean }>`
	padding: 6px 16px;
	border-radius: 100px;
	background-color: ${(props) => (props.$isSelected ? color.gray100 : 'transparent')};
	color: ${color.white};
	font-size: 14px;
	font-weight: 500;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: ${(props) => (props.$isSelected ? color.gray100 : color.gray70)};
	}
`
