import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import Facebook from 'components/Facebook'
import * as serviceWorker from './serviceWorker'

render(<Facebook />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
