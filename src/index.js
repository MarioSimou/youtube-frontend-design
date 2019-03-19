import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// components
import App from './components/App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('#root'))