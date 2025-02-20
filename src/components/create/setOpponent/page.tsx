import { useState } from 'react'
import styled from 'styled-components'
import color from '../../../design-system/colors/color'
// import { useFlow } from '../../../stackflow'

import ButtonDefault from '../../../design-system/components/Button/ButtonDefault'
import NavigationBar from '../../../design-system/components/NavigationBar'
import Header from '../../../design-system/components/Header'
import OpponentOption from './OpponentOption'

const CreateSetOpponentPageComp = () => {
	// const { push } = useFlow()
	const [hoveredOption, setHoveredOption] = useState<number | null>(null)
	const [selectedOption, setSelectedOption] = useState<number>(0)

	const handleNext = () => {
		// push('CreateInfoPage', {})
	}

	const handleOptionSelect = (index: number) => {
		setSelectedOption(index)
	}

	return (
		<Root>
			<Header title="허슬 생성" />

			<OptionsContainer>
				<OpponentOption
					title="1:1 대결"
					description="친구 또는 모르는 사람과 대결해보세요"
					isSelected={selectedOption === 0}
					isHovered={hoveredOption === 0}
					onHover={(value) => setHoveredOption(value ? 0 : null)}
					onSelect={() => handleOptionSelect(0)}
				/>
				<OpponentOption
					title="여러명과 대결"
					description="여러 사람들과 대결해보세요"
					isSelected={selectedOption === 1}
					isHovered={hoveredOption === 1}
					onHover={(value) => setHoveredOption(value ? 1 : null)}
					onSelect={() => handleOptionSelect(1)}
				/>
			</OptionsContainer>
			<ButtonDefault onClick={handleNext}>다음으로</ButtonDefault>
			<NavigationBar />
		</Root>
	)
}

export default CreateSetOpponentPageComp

const Root = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${color.gray100};
	padding: 20px;
`

const OptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin: 56px 0 0 0;
	margin-bottom: 270px;
`
