import React from 'react'
import ReactDOM from 'react-dom/client'
import { Stack } from './stackflow'
import { GlobalStyle } from './assets/styles/index'
import '@stackflow/plugin-basic-ui/index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<Stack />
	</React.StrictMode>
)
