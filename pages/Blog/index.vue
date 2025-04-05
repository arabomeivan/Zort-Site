<template>
    <div>
        <section class="welcome-section py-5">
        <h2 class="text-center"><span class="text-black">Welcome to</span> <span class="text-primary">Zort Blog</span></h2>
    <p class="text-center">Subscribe to learn about betting strategies, trends the latest in analysis, solutions, and updates.</p>

    <form class="subscribe-form mx-auto d-flex gap-2 justify-content-center w-50">
    <input v-model="searchQuery" type="email" class="form-control" placeholder="Search for Posts" required>
    <button class="btn text-white" type="submit">Search</button>
    </form>

    <div v-if="isLoading" class="d-flex justify-content-center my-3">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else-if="filteredPosts.length === 0" class="py-5 text-center">
        <h2>No results found</h2>
        <p>Please try a different search term or check your spelling.</p>
      </div>

      <div v-if="!isLoading" class="py-5 container">
        <div class="row justify-content-center">
          <div 
            v-for="posts in filteredPosts" 
            :key="posts"
            class="col-12 col-sm-6 col-lg-4 d-flex mb-4"
          >
            <NuxtLink to="#" class="text-decoration-none w-100">
              <div class="card border-0 h-100">
                <img :src="posts.urlToImage" class="card-img-top rounded-2" alt="...">
                <div class=" py-2 d-flex flex-column">
                  <span class="border-primary border text-primary bg-primary-opac rounded-5 p-2 w-50">
                    8 min read
                  </span>
                  <h5 class="card-title my-3">{{ posts.title }}</h5>
                  <p class="card-text">{{ posts.description }}</p>
                  <div class="mt-auto d-flex w-50 gap-3 justify-content-between">
                    <div>
                      <NuxtImg
                        class=" rounded-circle"
                        width="48"
                        height="48"
                        :src="posts.urlToImage"
                      />
                    </div>
                    <div>
                      <p>{{ posts.author }}</p>
                      <p>{{ posts.publishedAt }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      
    
        </section>
    </div>
</template>
<script>
export default {
    name:'Blog',
    
    data() {
        return {
            email:'',
            searchQuery: '',
            posts:null,
            isLoading: true
        }
    },
computed:{
    filteredPosts() {
      if (!this.searchQuery) return this.posts;
      return this.posts.filter(post =>
        post.title?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

},
watch: {
    data: {
      handler(newVal) {
        if (newVal?.articles) {
          this.posts = newVal.articles;
          this.loading = false;
        }
      },
      immediate: true
    }
},


    async created() {
  const config = useRuntimeConfig(); // load your .env

  try {
    const {data, status} = await useAsyncData('newsData', () =>
      $fetch('https://newsapi.org/v2/top-headlines?country=us&category=business', {
        headers: {
          'X-Api-Key': config.public.newsApiKey
        }
      })
    );

    if(status._value==='success')
    {
      this.posts = data.value.articles;
      this.isLoading = false;
    }
    else
    {
        this.isLoading = false;
    }
  } catch (error) {
    console.error('Something went wrong:', error);
    this.isLoading = false;
  }
}
    
}
</script>
<style>
    
</style>