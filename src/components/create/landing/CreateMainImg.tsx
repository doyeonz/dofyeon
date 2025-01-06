import styled from 'styled-components'
import ImgRunnerNormal from '../../../design-system/icons/imgRunnerNormal.svg'

const CreateMainImg = () => {
	return (
		<Root>
			<img src={ImgRunnerNormal} />
		</Root>
	)
}

export default CreateMainImg

const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 53px 69px 34px 69px;
`
