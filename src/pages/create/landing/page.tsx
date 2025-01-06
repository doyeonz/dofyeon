import { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'
import CreatePageComp from '../../../components/create/landing/page'

const CreatePage: ActivityComponentType = () => {
	return (
		<AppScreen>
			<CreatePageComp />
		</AppScreen>
	)
}

export default CreatePage
