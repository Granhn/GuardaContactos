import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Home',
            component: () => import('../views/hola.vue')
        },
        {
            path:'/prueba',
            name:'Prueba',
            component: () => import('../views/prueba.vue')
        }
    ]
});


export default router;