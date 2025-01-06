import styled from 'styled-components'
import color from '../colors/color'

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
	border: none;
	background-color: ${color.primary};
	color: ${color.gray100}
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
`
