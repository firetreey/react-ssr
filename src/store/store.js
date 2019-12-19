import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import IndexReaducer from './index'
import UserReaducer from './user'

import axios from 'axios'

const serverAxios = axios.create({
    baseURL: 'http://localhost:8090'
})

const clientAxios = axios.create({
    baseURL: '/'
})

const reducer = combineReducers({
    index: IndexReaducer,
    user: UserReaducer
})

// export default createStore(redecer, applyMiddleware(thunk))

export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

export const getClientStore = () => {

    const defaultStore = window.__context? window.__context: {}
    return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}