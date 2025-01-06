import styled from 'styled-components'
import color from '../../design-system/colors/color'

import Button from '../../design-system/components/Button'
import NavigationBar from '../../design-system/components/NavigationBar'
import CreateHeader from './CreateHeader'
import CreateMainImg from './CreateMainImg'
import CreateMainText from './CreateMainText'

const CreatePageComp = () => {
	const handleNext = () => {
		console.log('다음 페이지로 이동')
	}

	return (
		<Root>
			<CreateHeader />

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
