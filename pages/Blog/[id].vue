<template>
    <div class="py-5">
      <section class="pt-5">
       <p><b class="text-primary">data * 10 min read</b></p>

       <h2 class="text-black">
    Blog Title
       </h2>

       <p>
        content
       </p>

       <div class="mt-3 mb-5">
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

       <div class="mb-3">
        <NuxtImg class="img-fluid w-100 rouned-2" height="404"/>
       </div>

       <div class="text-justify">
        <p class="text-black">
        content
        </p>
       </div>

      </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>