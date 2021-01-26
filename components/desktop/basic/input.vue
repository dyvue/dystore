<template>
  <div class="relative w-full flex gap-1">
    <input type="text" class="sd-input w-64 px-3 py-2 text-black bg-form rounded-md text-sm border-grey" :placeholder="placeholder">
    <button v-if="iconSearch" type="submit" class="sd-input-btn px-3 py-2 rounded-md bg-form">
      <search-icon size="1x" class="sd-input-icon"/>
    </button>
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