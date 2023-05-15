<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
const auth = useAuthStore();
const logOut = () => {
    localStorage.removeItem('token');
};
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Hamlog 2.0</a>
        </div>
        <div class="flex-none gap-2">
            <div class="dropdown dropdown-end" v-if="auth.user[0]">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://api.multiavatar.com/Starcrasher.png" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a @click="logOut()">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
