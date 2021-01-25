<template>
  <div class="sd-header py-6">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <nuxt-link to="/">
            <img src="@/assets/images/logo-primary.svg" alt="Logo" class="w-48 h-auto object-cover">
          </nuxt-link>
          <desktop-input
            :icon="true"
            :iconSearch="true"
            :placeholder="'Cari produk di dystore...'"
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
}
</script>

<style>

</style>