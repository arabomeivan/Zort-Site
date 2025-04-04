<template>
    <div>
        <NavBar/>
        <main class="container py-5">
            <slot/>
        </main>
        <AppFooter/>
    </div>
</template>
<script lang="ts">

import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
    name:'DefaultLayout',
    components: {
        NavBar,
        AppFooter,
    }
}
</script>
<style>
    
</style>