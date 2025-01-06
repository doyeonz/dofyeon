import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'

import HomePage from './pages/home/page'

export const { Stack, useFlow } = stackflow({
	transitionDuration: 350,
	activities: {
		HomePage,
	},
	plugins: [
		basicRendererPlugin(),
		basicUIPlugin({
			theme: 'cupertino',
		}),
	],
	initialActivity: () => 'HomePage',
})
