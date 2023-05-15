<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
    <div class="flex min-w-full justify-center min-h-screen">
        <div class="w-full">
            <Navbar />
            <div class="flex items-center justify-center h-[calc(100vh-66px)]">
                <div class="hero h-full bg-base-200">
                    <div class="hero-content flex-col">
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <HelloWorld />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
