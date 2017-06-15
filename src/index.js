import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
require('./styles/index.css')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
