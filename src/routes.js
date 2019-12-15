import Index from './container/Index'
import About from './container/About'
import User from './container/User'

const routes = [
    {
        path: '/',
        component: Index,
        // exact: true,
        key: 'index'
    },
    {
        path: '/about',
        component: About,
        exact: true,
        key: 'about'
    },
    {
        path: '/user',
        component: User,
        exact: true,
        key: 'user'
    },
]

export default routes