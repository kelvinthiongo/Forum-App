import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: "/login",
        component: () =>
        import('../components/login/Login'),
    },
    {
        path: "/logout",
        component: () =>
        import('../components/login/Logout'),
    },
    {
        path: "/signup",
        component: () =>
        import('../components/login/Signup'),
    },
    {
        path: "/forum",
        component: () =>
        import('../components/forum/Forum'),
        name: 'forum',
    },
];

const router = new Router({
    mode: 'history',
    routes // short for `routes: routes`
});
export default router;
