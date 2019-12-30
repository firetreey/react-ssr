const express = require('express')
const puppeteer = require('puppeteer')

const server = express()

// async function test() {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.setViewport({ width: 1920, height: 1080 })
//     await page.goto('https://teacher.up366.cn/#/login')
//     await page.screenshot({path: 'test.png'})

//     console.log('screenshot finish')

//     await browser.close()
// }

// test()

server.get('*', async (req, res) => {
    console.log(req.url)
    if (req.url === '/favicon.ico') {
        res.send({ code: 0, msg: 'success' })
    } else {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const url = 'http://localhost:8080' + req.url
        await page.goto(url, {
            waitUntil: 'networkidle0'
        })
        const html = await page.content()
        await browser.close()
        res.send(html)
    }
})

server.listen(8081, (err) => {
    console.log('puppeteer server start')
})