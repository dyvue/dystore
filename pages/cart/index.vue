<template>
  <div class="py-4 ss-page">
    <div class="px-4">
      Keranjang
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  layout: (ctx) => ctx.isMobileOrTablet ? 'phone/default' : 'desktop/default',
}
</script>

<style>

</style>