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
                    <div class="hero-content flex-col lg:flex-row-reverse gap-12">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold">Login now!</h1>
                            <p class="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
                                repudiandae et a id nisi.
                            </p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <HelloWorld />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.radio-bg {
    background: url('https://images.pexels.com/photos/957485/pexels-photo-957485.jpeg') center center;
    background-attachment: fixed;
    background-size: cover;
}
</style>
