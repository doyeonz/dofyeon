import styled from 'styled-components'
import color from '../../colors/color'

interface ButtonProps {
	onClick: () => void
	children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
	return <StyledBtn onClick={onClick}>{children}</StyledBtn>
}

export default Button

const StyledBtn = styled.button`
	width: 347px;
	padding: 14px;
	text-align: center;
	border-radius: 12px;
	border: solid 1.5px ${color.gray30};
	background-color: ${color.gray100};
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
`
