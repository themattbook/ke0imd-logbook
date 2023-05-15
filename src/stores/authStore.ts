import { defineStore } from 'pinia';
import { User, signInWithEmailAndPassword } from '../../node_modules/firebase/auth';
import { auth } from '../utils/firebase';
import jwt_decode from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: [] as User[],
        isLoggedIn: !!localStorage.getItem('token'),
    }),
    getters: {},
    actions: {
        async loginAction(user: string, pass: string) {
            try {
                const email = user;
                const password = pass;
                signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    localStorage.setItem('token', (userCredential.user as any).accessToken);
                    this.user.push(jwt_decode((userCredential.user as any).accessToken));
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
});
