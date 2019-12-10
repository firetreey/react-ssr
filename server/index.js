import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const server = express()

server.use(express.static('public'))

server.get('/', (req, res) => {
    const content = renderToString(App)
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