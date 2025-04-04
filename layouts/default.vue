<template>
    <div>
        <div v-if="!appMounted" class="position-fixed top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center z-index-1">
            <NuxtImg class="img-fluid align-self-center" src="Zort.png"/>
        </div>
        <div v-if="appMounted">
            <NavBar/>
            <main class="container py-5">
                <slot/>
            </main>
            <AppFooter/>
        </div>
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
    },
    data()
    {
        return {
            appMounted: false,
        }
    },

    mounted() {
        this.appMounted = true;
    },
 
}
</script>
<style>
    
</style>