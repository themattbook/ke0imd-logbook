<script setup lang="ts">
import Login from '../components/LoginUser.vue';
import RegisterUser from '../components/RegisterUser.vue';
import { ref } from 'vue';

const newUser = ref(false);
const toggleNewUser = () => {
    newUser.value = !newUser.value;
};
</script>
<template>
    <div class="flex items-center justify-center h-[calc(100vh-66px)]">
        <div class="hero h-full bg-base-200">
            <div class="hero-content flex-col">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Login v-if="!newUser" />
                    <RegisterUser v-if="newUser" />
                </div>
                <div>
                    <p @click="toggleNewUser" class="cursor-pointer text-center">New user? Create an account</p>
                </div>
            </div>
        </div>
    </div>
</template>
