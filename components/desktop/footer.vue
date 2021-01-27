<template>
  <div class="py-6 sd-section-divider">
    <div class="container mx-auto">
      <span class="text-grey text-sm">© 2021 Hak cipta terpelihara oleh <a :href="app_url" class="text-primary">{{ app_name }}</a></span>
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
    app_url() {
      return "http://" + process.env.APP_URL;
    },
  },
}
</script>

<style>

</style>