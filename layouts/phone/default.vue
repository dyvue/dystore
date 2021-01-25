<template>
  <div class="ss-frame">
    <Nuxt/>
    <phone-navigation/>
  </div>
</template>

<script>
import PhoneNavigation from '@/components/phone/navigation'
export default {
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ]
  },
  components: {
    PhoneNavigation
  }
}
</script>

<style>

</style>