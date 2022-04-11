import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

import daybookRouter from '../modules/daybook/router'
import authRouter from '../modules/auth/router'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/daybook',
        beforeEnter: [isAuthenticatedGuard],
        ...daybookRouter
    },
    {
        path: '/auth',
        ...authRouter
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'login' } 
        
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
