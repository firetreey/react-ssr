import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import App from '../src/App'

import { Provider } from 'react-redux'
import store from '../src/store/store'

const server = express()

server.use(express.static('public'))

server.get('*', (req, res) => {

    const Page = (
        <Provider store={store}>
            <StaticRouter location={req.url}>
                {App}
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
                <script src='./bundle.js'></script>
            </body>
        </html>
    `)
})

server.listen(8080, (err) => {
    console.log('服务已启动')
})