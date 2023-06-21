<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
console.log(localStorage);
const email = ref('');
const password = ref('');

const auth = useAuthStore();

const login = async (user: string, pass: string) => {
    try {
        await auth.loginAction(user, pass);
        router.push('/dashboard');
    } catch (error) {
        console.log('Login error:', error);
    }
};
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h1 class="font-bold text-xl">Login</h1>
            <form @submit.prevent="login(email, password)" @keydown.enter="login(email, password)">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input v-model="email" type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input v-model="password" type="password" id="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <button class="btn btn-primary mt-3 w-full" type="submit">Login</button>
            </form>
        </div>
    </div>
</template>
