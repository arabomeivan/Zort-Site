<template>
    <div class="py-5">
        <div class="row">
            <div class="col-lg-6 d-flex">
<form class="text-justify w-100 align-self-center" @submit.prevent="">
<div>
    <div class="mb-4" style="text-align:justify;">
        <label for="exampleFormControlInput1" class="form-label text-secondary">First Name<span class="text-danger">*</span></label>
        <input id="exampleFormControlInput1" type="text" class="form-control" placeholder="First Name">
      </div>
      <div class="mb-4" style="text-align:justify;">
        <label for="exampleFormControlInput1" class="form-label text-secondary">Last Name<span class="text-danger">*</span></label>
        <input id="exampleFormControlInput1" type="text" class="form-control" placeholder="Last Name">
      </div>
      <div class="mb-4" style="text-align:justify;">
        <label for="exampleFormControlInput1" class="form-label text-secondary">Email<span class="text-danger">*</span></label>
        <input id="exampleFormControlInput1" type="email" class="form-control" placeholder="Email">
      </div>
      <div class="mb-4" style="text-align:justify;">
        <label for="exampleFormControlTextarea1" class="form-label">Message <span class="text-danger">*</span></label>
        <textarea id="exampleFormControlTextarea1" class="form-control" rows="3"/>
      </div>

      <div class="d-flex justify-content-center">
        <button class="btn text-white w-100" type="submit">Send Message</button>
      </div>
</div>
</form>
            </div>

            <div class="col-lg-6 d-none d-lg-block">
                <NuxtImg
                class="w-100 rounded-3"
                src="contact.png"
                />
    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ContactUs'
}
</script>
<style lang="">
    
</style>