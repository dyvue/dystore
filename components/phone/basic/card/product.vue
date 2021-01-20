<template>
  <div class="ss-card-product border border-grey2 rounded-xl p-3 text-center">
    <div class="grid grid-cols-2 gap-4 text-left">
      <div>
        <img v-if="images" :src="images" :alt="name" class="object-cover w-full h-32 rounded-xl">
        <img v-else src="https://smartcity.bandung.go.id/assets/images/no_img.png" :alt="name" class="object-cover w-full h-16 rounded-xl">
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-xs text-primary flex items-center gap-1"><map-pin-icon size="1x"/>Jakarta Utara</span>
        <span class="text-xs text-grey">Terjual 203</span>
        <h5 class="font-semibold text-sm">{{ name }}</h5>
        <h4 class="font-extrabold text-sm">{{ $helpers.currency.idr(price) }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { MapPinIcon } from 'vue-feather-icons'
export default {
  props: {
    images: String,
    name: String,
    price: Number
  },
  components: {
    MapPinIcon
  }
}
</script>

<style>

</style>