import styled from 'styled-components'
import color from '../../../design-system/colors/color'
import { useFlow } from '../../../stackflow'

import Button from '../../../design-system/components/Button'
import NavigationBar from '../../../design-system/components/NavigationBar'
import Header from '../../../design-system/components/Header'
import CreateMainImg from './CreateMainImg'
import CreateMainText from './CreateMainText'

const CreatePageComp = () => {
	const { push } = useFlow()

	const handleNext = () => {
		push('CreateSetOpponentPage', {})
	}

	return (
		<Root>
			<Header title="허슬 생성" />

			<CreateMainImg />

			<CreateMainText />

			<Button onClick={handleNext}>다음으로</Button>

			<NavigationBar />
		</Root>
	)
}

export default CreatePageComp

const Root = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${color.gray100};
	padding: 20px;
`
