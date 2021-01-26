<template>
  <div class="py-6 sd-section-divider">
    <div class="container mx-auto">
      <span class="text-grey text-sm">© 2021 Hak cipta terpelihara oleh <span class="text-primary">{{ app_name }}</span></span>
    </div>
  </div>
</template>

<script>
import { ShoppingCartIcon, UserIcon } from 'vue-feather-icons'

import DesktopInput from "@/components/desktop/basic/input";
export default {
  components: {
    ShoppingCartIcon,
    UserIcon,

    DesktopInput
  },
  computed: {
    app_name() {
      return process.env.APP_NAME;
    },
  },
}
</script>

<style>

</style>