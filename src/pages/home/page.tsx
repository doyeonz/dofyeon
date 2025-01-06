import { ActivityComponentType } from '@stackflow/react'
import HomePageComp from '../../components/home/page'
import { AppScreen } from '@stackflow/plugin-basic-ui'

const HomePage: ActivityComponentType = () => {
	return (
		<AppScreen>
			<HomePageComp />
		</AppScreen>
	)
}

export default HomePage
