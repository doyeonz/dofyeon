import '@stackflow/plugin-basic-ui/index.css'
import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'

import HomePage from './pages/home/page'
import CreatePage from './pages/create/page'
import HustlePage from './pages/hustle/page'
import MorePage from './pages/more/page'

export const { Stack, useFlow } = stackflow({
	transitionDuration: 350,
	activities: {
		HomePage,
		CreatePage,
		HustlePage,
		MorePage,
	},
	plugins: [
		basicRendererPlugin(),
		basicUIPlugin({
			theme: 'cupertino',
		}),
		historySyncPlugin({
			routes: {
				HomePage: '/',
				CreatePage: '/create',
				HustlePage: '/hustle',
				MorePage: '/more',
				NotFound: '*',
			},
			fallbackActivity: () => 'NotFound',
		}),
	],
})
