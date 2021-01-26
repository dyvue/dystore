<template>
  <div>
    <phone-header :title="'Keranjang'"/>
    <div class="py-4 ss-page">
      <div class="px-4">
        Keranjang
      </div>
    </div>
  </div>
</template>

<script>
import PhoneHeader from '@/components/phone/header'
export default {
  transition: 'fade',
  layout: (ctx) => ctx.isMobileOrTablet ? 'phone/default' : 'desktop/default',
  components: {
    PhoneHeader
  },
}
</script>

<style>

</style>