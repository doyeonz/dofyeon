import { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'

import MorePageComp from '../../components/more/page'

const MorePage: ActivityComponentType = () => {
	return (
		<AppScreen>
			<MorePageComp />
		</AppScreen>
	)
}

export default MorePage
