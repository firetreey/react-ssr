import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import App from '../src/App'
import routes from '../src/routes'
import Header from '../src/component/Header'

import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store'

const Page = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header></Header>
            {routes.map(route => <Route {...route}></Route>)}
        </BrowserRouter>
    </Provider>
)

ReactDom.hydrate(Page, document.getElementById('root'))