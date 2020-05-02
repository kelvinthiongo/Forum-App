import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: "/login",
        component: () =>
        import(/* webpackChunkName: "bundle.login" */ '../components/login/Login'),
    }
];

const router = new Router({
    mode: 'history',
    routes // short for `routes: routes`
});
export default router;
