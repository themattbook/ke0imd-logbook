import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getAuth, Auth } from '../node_modules/firebase/auth';
import Home from '../src/views/Home.vue';
import Dashboard from '../src/views/Dashboard.vue';

const isAuthenticated = (auth: Auth) => {
    return new Promise<boolean>((resolve) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(!!user);
        });
    });
};

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    // Other routes...
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const auth = getAuth(); // Obtain the Firebase auth instance
    const authenticated = await isAuthenticated(auth);

    if (requiresAuth && !authenticated) {
        next('/'); // Redirect to the login page or a specific route for unauthorized access
    } else {
        next();
    }
});

export default router;
