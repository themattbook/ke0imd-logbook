<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
    <div class="flex min-w-full justify-center min-h-screen">
        <div class="w-full">
            <Navbar />
            <router-view />
        </div>
    </div>
</template>
