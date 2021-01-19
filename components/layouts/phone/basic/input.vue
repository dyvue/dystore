<template>
  <div class="relative w-full">
    <search-icon v-if="iconSearch" class="ss-input-icon"/>
    <input type="text" class="ss-input w-full px-8 py-4 text-black bg-form rounded-lg" :class="{ 'pl-12': icon }" :placeholder="placeholder">
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
export default {
  props: {
    icon: Boolean,
    iconSearch: Boolean,
    placeholder: String
  },
  components: {
    SearchIcon
  }
}
</script>

<style>

</style>