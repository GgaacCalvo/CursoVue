import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '../modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',

                component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: (rout) => {
                    const id = Number(rout.params.id)

                    return isNaN(id) ? { id: 1 } : {
                        id: id

                    }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about'}
            },
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '../modules/dbz/layouts/DragonBallLayout'),
        children:[
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "About" */ '../modules/dbz/pages/About')
            },
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "Characters" */ '../modules/dbz/pages/Characters')
            },
            {
                path:'',
                redirect: {
                    name: 'dbz-characters'
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router