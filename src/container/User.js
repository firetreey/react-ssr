import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'

import styles from './User.css'
import withStyle from '../withStyle'

function User(props) {
    
    useEffect(() => {
        if (!props.userInfo.name) {
            props.getUserInfo()
        }
    }, [])
    return (<div>
        <h1 className={styles.title}>hello {props.userInfo.name}!</h1>
        <h2>您已学习{props.userInfo.time}小时</h2>
    </div>)
}

User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}

export default connect(
    state => ({ userInfo: state.user.userInfo }),
    { getUserInfo }
)(withStyle(User, styles))