import Index from './container/Index'
import About from './container/About'
import User from './container/User'
import NotFound from './container/NotFound'

const routes = [
    {
        path: '/',
        component: Index,
        exact: true,
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
    {
        component: NotFound,
        key: 'NotFound'
    }
]

export default routes