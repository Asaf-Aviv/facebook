import 'react-hot-loader'
import React from 'react'
import ReactGA from 'react-ga'
import { render } from 'react-dom'
import { Facebook } from 'components'
import padStatrtPolyfill from 'polyfills/padStart'
import * as serviceWorker from './serviceWorker'
import 'simplebar/dist/simplebar.min.css'

ReactGA.initialize(process.env.REACT_APP_GA!)

padStatrtPolyfill()

render(<Facebook />, document.getElementById('root'))

serviceWorker.unregister()
