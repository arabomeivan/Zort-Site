<template>
    <div class="bg-dark">
        <div class="container text-white py-5">
         <div class="mb-5">
            <b class="fs-2">
                Zort
            </b>
         </div>

         <div>
            <p class="mb-2">
                Join our newsletter
            </p>
            <p class="text-secondary">
            We'll send you a nice letter once per week. No spam
            </p>
            <form @submit.prevent="" class="mb-5">
                
                <input type="email" class="form-control mb-3 border-0" id="exampleFormControlInput1" placeholder="Enter Your Email">
                
                <div>
                    <button class="btn text-white w-100" type="submit">
                        Subscribe
                       </button>
                </div>
                
            </form>

            <ul class="list-unstyled">
                <li v-for="footerLinks in footerLinks" :key="footerLinks.id">
                    <NuxtLink :to="footerLinks.link" class="text-secondary text-decoration-none hover-white">
                     <b>{{footerLinks.text}}</b>   
                    </NuxtLink>
                </li>
            </ul>
         </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "AppFooter",

    data() {
        return {
            footerLinks: [
                { id: 1, text: 'Home', link:'/' },
                { id: 2, text: 'Blog', link: '/blog' },
                { id: 4, text: 'About', link: '/about' },
                { id: 5, text: 'Contact', link: '/contactus' },
            ]
        }
    }
 
}
</script>

<style>
    
</style>