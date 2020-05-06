import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: () =>
        import('../components/Parallax'),
    },
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
    {
        path: "/question/:slug",
        component: () =>
        import('../components/forum/read'),
        name: 'read',
    },
    {
        path: "/ask-question",
        component: () =>
        import('../components/forum/create'),
        name: 'create',
    },
    {
        path: "/category",
        component: () =>
        import('../components/category/CreateCategory'),
        name: 'category',
    },
];

const router = new Router({
    mode: 'history',
    routes // short for `routes: routes`
});
export default router;
