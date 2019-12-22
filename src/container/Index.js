import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'
import {Link} from 'react-router-dom'
import styles from './Index.css'
import withStyle from '../withStyle'

function Index(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!props.list.length) {
            props.getIndexList()
        }
    }, [])
    return (<div>
        <h1 className={styles.title}>hello world!</h1>
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
                if (stu.uid === 1) {
                    return <li key={stu.uid}><Link to='/user'>{stu.name}</Link></li>
                }else {
                    return <li key={stu.uid}>{stu.name}</li>
                }
            })}
        </ul>
    </div>)
}

Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}

export default connect(
    state => ({ list: state.index.list }),
    { getIndexList }
)(withStyle(Index, styles))