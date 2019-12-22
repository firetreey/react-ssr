import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom'
import express from 'express'
import App from '../src/App'
import routes from '../src/routes'

import Header from '../src/component/Header'

import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'

import proxy from 'http-proxy-middleware'

import path from 'path'
import fs from 'fs'

const store = getServerStore()

const server = express()

server.use(express.static('public'))

server.use('/api', proxy({ target: 'http://localhost:8090', changeOrigin: true }))

function csrRender(res) {
    const filePath = path.resolve(process.cwd(), 'public/index.csr.html')
    const html = fs.readFileSync(filePath, 'utf-8')
    return res.send(html)
}

server.get('*', (req, res) => {

    if (req.query._mode === 'csr') {
        console.log('通过URL开启csr降级')
        return csrRender(res)
    }

    const promises = []
    routes.some(route => {
        const match = matchPath(req.url, route)
        if (match) {
            const { loadData } = route.component
            if (loadData) {
                const promise = new Promise((resolve, reject) => {
                    loadData(store).then(resolve).catch((err) => {
                        console.log(err.response.status, err.response.config.url)
                        resolve()
                    })
                })
                promises.push(promise)
            }
        }
    })

    Promise.all(promises).then(() => {
        const context = {
            css: []
        }
        const Page = (
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Header></Header>
                    <Switch>
                        {routes.map(route => <Route {...route}></Route>)}
                    </Switch>
                </StaticRouter>
            </Provider>
        )
        const content = renderToString(Page)
        console.log(context)
        console.log(res.statusCode)
        if (context.statusCode) {
            res.statusCode = context.statusCode
        }
        if (context.action === 'REPLACE') {
            res.redirect(301, context.url)
        }

        const css = context.css.join('\n')

        res.send(`
            <html>
                <head>
                    <mate charset='UTF-8'/>
                    <title>reat-ssr</title>
                    <style>${css}</style>
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