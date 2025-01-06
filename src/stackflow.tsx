import '@stackflow/plugin-basic-ui/index.css'
import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { historySyncPlugin } from '@stackflow/plugin-history-sync'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'

import HomePage from './pages/home/page'
import CreatePage from './pages/create/page'

export const { Stack, useFlow } = stackflow({
	transitionDuration: 350,
	activities: {
		HomePage,
		CreatePage,
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
				NotFound: '*',
			},
			fallbackActivity: () => 'NotFound',
		}),
	],
	initialActivity: () => 'HomePage',
})
