import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'

function Index(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        props.getIndexList()
    }, [])
    return (<div>
        <Link to='/about'>about</Link>
        <h1>hello world!</h1>
        <h2>{count}</h2>
        <button onClick={() => {
            setCount(count + 1)
        }}>增加</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>减少</button>
        <hr />
        <ul>
            {props.list.map((stu) => {
                return <li key={stu.uid}>{stu.name}</li>
            })}
        </ul>
    </div>)
}

export default connect(state => ({ list: state.index.list }), { getIndexList })(Index)