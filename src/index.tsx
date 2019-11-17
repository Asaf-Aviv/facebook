import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { Facebook } from 'components'
import * as serviceWorker from './serviceWorker'
import 'simplebar/dist/simplebar.min.css'

render(<Facebook />, document.getElementById('root'))

serviceWorker.unregister()
