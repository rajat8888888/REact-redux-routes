import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import counterStore from './component/store/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={counterStore}>
    <App />
    </Provider>,
)
