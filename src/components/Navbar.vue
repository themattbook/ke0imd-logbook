<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
import { getAuth, signOut } from '../../node_modules/firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authState = useAuthStore();
const logOut = () => {
    try {
        localStorage.removeItem('token');
        const auth = getAuth();
        signOut(auth);
        authState.isLoggedIn = false;
        authState.token = '';
        router.push('/');
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Radio Operator's Logbook</a>
        </div>
        <div class="flex-none gap-2">
            <div class="dropdown dropdown-end" v-if="authState.token">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://api.multiavatar.com/Starcrasher.png" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li class="disabled font-bold text-sm text-center"></li>
                    <li><a @click="logOut()">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
