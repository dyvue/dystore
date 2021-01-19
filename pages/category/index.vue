<template>
  <div>
    <phone-header :title="'Kategori'"/>
    <div class="py-4 ss-page">
      <div class="px-4">
        Kategori
      </div>
    </div>
  </div>
</template>

<script>
import PhoneHeader from '@/components/layouts/phone/header'
export default {
  transition: 'fade',
  layout: 'phone/navigation',
  components: {
    PhoneHeader
  },
}
</script>

<style>

</style>