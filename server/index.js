import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import express from 'express'
// import App from '../src/App'
import routes from '../src/routes'

import Header from '../src/component/Header'

import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'

const store = getServerStore()

const server = express()

server.use(express.static('public'))

server.get('*', (req, res) => {

    const promises = []
    routes.some(route => {
        const match = matchPath(req.url, route)
        if (match) {
            const { loadData } = route.component
            if (loadData) {
                promises.push(loadData(store))
            }
        }
    })

    Promise.all(promises).finally(() => {

        const Page = (
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header></Header>
                    {routes.map(route => <Route {...route}></Route>)}
                </StaticRouter>
            </Provider>
        )

        const content = renderToString(Page)
        res.send(`
            <html>
                <head>
                    <mate charset='UTF-8'/>
                    <title>reat-ssr</title>
                </head>
                <body>
                    <div id='root'>${content}</div>
                    <script>
                        window.__context = ${JSON.stringify(store.getState())}
                    </script>
                    <script src='./bundle.js'></script>
                </body>
            </html>
        `)

    })
    .catch(err => {
        res.send(err)
    })
})

server.listen(8080, (err) => {
    console.log('服务已启动')
})