let express = require('express')

const server = express()

server.get('/api/student/list',(req, res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-MethodS','PUT,DELETE,GET,POST')
    res.header('Content-Type',"application/json;charset='utf-8'")
    res.json({
        code: 0,
        list: [
            {
                uid: 001,
                name: '张三'
            },
            {
                uid: 002,
                name: '李四'
            },
            {
                uid: 003,
                name: '王五'
            },
            {
                uid: 004,
                name: '赵六'
            },
        ]
    })
})

server.listen(8090,(err)=>{
    console.log('moke服务启动')
})