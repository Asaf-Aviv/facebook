import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { Facebook } from 'components'
import padStatrtPolyfill from 'polyfills/padStart'
import * as serviceWorker from './serviceWorker'
import 'simplebar/dist/simplebar.min.css'

padStatrtPolyfill()

render(<Facebook />, document.getElementById('root'))

serviceWorker.unregister()
