<template>
  <div class="py-4 ss-page">
    <div class="px-4">
      Keranjang
    </div>
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-else-if="$device.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  layout: "phone/navigation"
};
</script>

<style></style>
