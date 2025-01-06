import '@stackflow/plugin-basic-ui/index.css'

import ReactDom from 'react-dom/client'
import { Stack } from './stackflow'

const root = ReactDom.createRoot(document.getElementById('root')!)
root.render(<Stack />)
