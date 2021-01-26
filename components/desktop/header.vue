<template>
  <div class="sd-header py-6">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <nuxt-link to="/" class="whitespace-nowrap">
            <h2 class="ft-heading text-2xl text-primary font-bold tracking-wide w-48">{{ app_name }}</h2>
          </nuxt-link>
          <desktop-input
            :icon="true"
            :iconSearch="true"
            :placeholder="'Cari produk di ' + app_name + '...'"
          />
        </div>
        <div class="flex items-center gap-1">
          <div class="flex gap-4">
            <button class="sd-link">
              <shopping-cart-icon size="1.2x"/>
            </button>
            <span class="text-grey">|</span>
            <button class="sd-link">
              <user-icon size="1.2x"/>
            </button>
          </div>
        </div>
      </div>
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