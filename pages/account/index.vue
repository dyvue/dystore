<template>
  <div>
    <phone-header :title="'Akun'"/>
    <div class="py-4 ss-page">
      <div class="px-4">
        Akun
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