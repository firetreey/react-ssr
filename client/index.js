import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../src/App'
import routes from '../src/routes'
import Header from '../src/component/Header'

import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store'

const Page = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header></Header>
            <Switch>
                {routes.map(route => <Route {...route}></Route>)}
            </Switch>
        </BrowserRouter>
    </Provider>
)

if (window.__context) {
    ReactDom.hydrate(Page, document.getElementById('root'))
} else {
    ReactDom.render(Page, document.getElementById('root'))
}