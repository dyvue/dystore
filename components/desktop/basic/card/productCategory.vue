<template>
  <nuxt-link to="/" class="mb-4">
    <div class="sd-card-product-category border border-grey2 rounded-xl p-3 text-center">
      <img v-if="images" :src="images" :alt="name" class="object-cover w-full h-32 rounded-xl">
      <img v-else src="https://smartcity.bandung.go.id/assets/images/no_img.png" :alt="name" class="object-cover w-full h-32 rounded-xl">
      <h5 class="mt-5 font-semibold text-md">{{ name }}</h5>
      <p class="text-grey text-sm">{{ desc }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    images: String,
    name: String,
    desc: String
  }
}
</script>

<style>

</style>