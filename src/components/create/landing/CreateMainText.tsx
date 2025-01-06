import styled from 'styled-components'

const CreateMainText = () => {
	return (
		<Root>
			<h2>허슬할 준비가 되었나요?</h2>
			<p>
				아래 버튼을 눌러서
				<br />
				새로운 허슬을 만들 수 있어요
			</p>
		</Root>
	)
}

export default CreateMainText

const Root = styled.div`
	color: white;
	text-align: center;
	margin-bottom: 64px;

	h2 {
		font-size: 24px;
		margin-bottom: 8px;
	}

	p {
		font-size: 16px;
		color: #888;
	}
`
