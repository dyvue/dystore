<template>
  <nuxt-link :to="{ name: 'product-id-show', params: { id: id, show: $helpers.repl_whspace(name)} }">
    <div class="sd-card-product border border-grey2 rounded-xl p-3 text-center">
      <div class="absolute bottom-0 right-0 px-4 py-2">
        <button><shopping-cart-icon size="1x" class="text-white"/></button>
      </div>
      <div class="grid grid-cols-2 gap-4 text-left">
        <div>
          <img v-if="images" :src="images" :alt="name" class="object-cover w-full h-32 rounded-xl">
          <img v-else src="https://smartcity.bandung.go.id/assets/images/no_img.png" :alt="name" class="object-cover w-full h-16 rounded-xl">
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-xs text-grey">Terjual 203</span>
          <nuxt-link :to="{ name: 'product-id-show', params: { id: id, show: $helpers.repl_whspace(name)} }">
            <h5 class="text-sm hover:underline">{{ name }}</h5>
          </nuxt-link>
          <h6 class="font-extrabold text-lg tracking-wider">{{ $helpers.currency.idr(price) }}</h6>
          <span class="text-xs text-primary flex items-center gap-1"><map-pin-icon size="1x"/>Jakarta Utara</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { ShoppingCartIcon, MapPinIcon } from 'vue-feather-icons'
export default {
  props: {
    id: String,
    name: String,
    price: Number,
    images: String,
  },
  components: {
    ShoppingCartIcon,
    MapPinIcon,
  }
}
</script>

<style>

</style>