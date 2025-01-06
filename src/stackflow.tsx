import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'

export const { Stack, useFlow } = stackflow({
	transitionDuration: 350,
	activities: {
		엑티비티1,
		엑티비티2,
	},
	plugins: [
		basicRendererPlugin(),
		basicUIPlugin({
			theme: 'cupertino',
		}),
	],
	initialActivity: () => '특정엑티비티',
})
