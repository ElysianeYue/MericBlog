import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home/index.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;