import styled from 'styled-components'
import color from '../../../design-system/colors/color'
import { useFlow } from '../../../stackflow'

import ButtonDefault from '../../../design-system/components/Button/ButtonDefault'
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

			<ButtonDefault onClick={handleNext}>다음으로</ButtonDefault>

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
