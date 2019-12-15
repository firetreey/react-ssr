import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import IndexReaducer from './index'
import UserReaducer from './user'

const reducer = combineReducers({
    index: IndexReaducer,
    user: UserReaducer
})

// export default createStore(redecer, applyMiddleware(thunk))

export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {

    const defaultStore = window.__context? window.__context: {}
    return createStore(reducer, defaultStore, applyMiddleware(thunk))
}