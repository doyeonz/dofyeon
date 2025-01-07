import { ActivityComponentType } from '@stackflow/react'
import { AppScreen } from '@stackflow/plugin-basic-ui'

import HustleRoomListPageComp from '../../components/hustle/page'

const HustlePage: ActivityComponentType = () => {
	return (
		<AppScreen>
			<HustleRoomListPageComp />
		</AppScreen>
	)
}

export default HustlePage
