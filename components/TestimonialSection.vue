<template>
    <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex gap-3 flex-wrap justify-content-center">
                  <div v-for="testimonials in testimonials" :key="testimonials.id" class=" border-0 card rounded-2 bg-primary text-white p-3">
                    <p class="mb-3 d-flex flex-wrap">
                 {{testimonials.content}}
                    </p>
                 
                    <span class="mb-3 d-flex gap-1">
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                    </span>
                 
                    <div class="mt-auto d-flex w-50 justify-content-between">
                     <div>
                       <NuxtImg
class="img-fluid rounded-circle"
                        width="48"
                        height="48"
                        :src="testimonials.image"
                       />
                     </div>
                 
                     <div>
                       <p>
                        {{testimonials.name}}
                       </p>
                       <p>
                 {{testimonials.username}}
                       </p>
                     </div>
                    </div>
                                </div>
                </div>

              </div>
              <div class="carousel-item">
                <div class="d-flex gap-3 flex-wrap justify-content-center">
                  <div v-for="testimonials in testimonialsAlt" :key="testimonials.id" class=" border-0 card rounded-2 bg-primary text-white p-3">
                    <p class="mb-3 d-flex flex-wrap">
                 {{testimonials.content}}
                    </p>
                 
                    <span class="mb-3 d-flex gap-1">
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                     <BootstrapIcon class="text-white" name="bi bi-star-fill"/>
                    </span>
                 
                    <div class="mt-auto d-flex w-50 justify-content-between">
                     <div>
                       <NuxtImg
class="img-fluid rounded-circle"
                        width="48"
                        height="48"
                        :src="testimonials.image"
                       />
                     </div>
                 
                     <div>
                       <p>
                        {{testimonials.name}}
                       </p>
                       <p>
                 {{testimonials.username}}
                       </p>
                     </div>
                    </div>
                                </div>
                </div>
                
              </div>
            </div>

            
            
          </div>
          <div class="container px-5">
            <div class="container p-5 justify-content-start d-flex gap-2">
              <button class=" ml-5 d-flex justify-content-center btn btn-alt bg-transparent rounded-circle border border-primary text-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon align-self-center" aria-hidden="true"/>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class=" d-flex justify-content-center btn btn-alt rounded-circle border border-primary bg-transparent text-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon align-self-center" aria-hidden="true"/>
              <span class="visually-hidden">Next</span>
            </button>
            </div>
          </div>

          
    </div>
</template>
<script>
export default {
    name:'TestimonialsSection',

    data()
    { 
      return{
        testimonials: [
  {
    content: "This product completely changed the way I work! Highly recommended.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop",
    name: "Alex Johnson",
    username: "@alexj",
    id: 0
  },
  {
    content: "Super intuitive and easy to use. It’s become a daily tool for me.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Jamie Patel",
    username: "@jamiep",
    id: 1
  },
  {
    content: "Exceptional support and great performance — totally worth it.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop",
    name: "Taylor Brooks",
    username: "@taylorb",
    id: 2
  },
  {
    content: "We onboarded our whole team with no issues. Everyone loves it.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Morgan Smith",
    username: "@morgans",
    id: 3
  },
  {
    content: "Reliable and smooth experience from day one. Highly recommended.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=100&h=100&fit=crop",
    name: "Casey Nguyen",
    username: "@caseyn",
    id: 4
  },
  {
    content: "It does exactly what it promises, and then some. Love it!",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop",
    name: "Jordan Lee",
    username: "@jordanl",
    id: 5
  }
],
testimonialsAlt: [
  {
    content: "Absolutely stellar service. It's like having a secret weapon in our workflow.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    name: "Nina Rhodes",
    username: "@ninar"
  },
  {
    content: "Love the simplicity and how effective it is. Great for teams!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    name: "Victor Tran",
    username: "@victran"
  },
  {
    content: "I didn't expect it to make such a difference — but here we are!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    name: "Laura Chen",
    username: "@laurachen"
  },
  {
    content: "One of those tools that just feels right from the first click.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
    name: "Daniel Kim",
    username: "@danielk"
  },
  {
    content: "It’s smooth, fast, and reliable. Checks every box for us.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop",
    name: "Sophia Ahmed",
    username: "@sophiacodes"
  },
  {
    content: "We replaced 3 other tools with this one — game changer.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop",
    name: "Matt O'Connell",
    username: "@mattdev"
  }
]


      }
    }
}
</script>
<style lang="">
    
</style>