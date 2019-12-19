import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <Link to='/'>首页</Link>
            |  |
            <Link to='/about'>about页(redirect到user页)</Link>
            |  |
            <Link to='/asd'>404</Link>
        </div>
    )
}