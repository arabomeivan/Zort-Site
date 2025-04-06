<template>
  <!-- parent tag -->
  <div>
    <nav :class="pageScrolledY ? 'navbar navbar-expand-lg navbar-light bg-light fixed-top':'navbar navbar-expand-lg navbar-light bg-light bg-lg-transparent fixed-top'">
      <div class="container">
          <div class="d-flex justify-content-end w-100 d-lg-none">
              <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"/>
                </button>
          </div>
        
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"/>
        </button> -->
        <div id="navbarTogglerDemo01" class="collapse navbar-collapse text-center d-lg-flex justify-content-lg-between">
          <NuxtLink to="/" class="text-primary text-decoration-none"><b class="fs-2">Zort</b></NuxtLink>
          <ul class="navbar-nav mb-2 mb-lg-0 ">
            <li v-for="link in navLinks" :key="link.id" class="nav-item">
              <NuxtLink :to="link.path" :class=" isActive===link.path? 'nav-link active text-secondary':'nav-link text-secondary' " aria-current="page" href="#"><b>{{ link.label }}</b></NuxtLink>
            </li>
          </ul>
          <div class="d-lg-flex">

              <NuxtLink to="/signup"><button class="btn text-white border-0" type="submit">Sign Up</button></NuxtLink>
          </div>

        </div>
      </div>
    </nav>
  </div>
    
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navLinks:[
                {
                    label: 'Home',
                    path: '/',
                    id: 0
                },
                {
                    label: 'About Us',
                    path: '/#about',
                    id: 1
                },
                {
                    label: 'Blog',
                    path: '/blog',
                    id: 1
                },
                {
                    label: 'ContactUs',
                    path: '/contactus',
                    id: 2
                },

            ],
            pageScrolledVertically: false
        }
    },

    computed:{
       isActive(){
        return this.$route.path
       },

       pageScrolledY()
       {
        return this.pageScrolledVertically
       }
       
       
    },
    mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
    methods:{
      handleScroll() {
        if (window.scrollY > 0) {
          this.pageScrolledVertically = true
        } else {
          this.pageScrolledVertically = false
        }
      }
    }
}
</script>
<style>



</style>