import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import IndexReaducer from './index'

const redecer = combineReducers({
    index: IndexReaducer
})

export default createStore(redecer, applyMiddleware(thunk))