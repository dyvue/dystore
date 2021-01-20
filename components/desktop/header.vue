<template>
  <div class="sd-header py-4">
    <div class="container mx-auto px-24">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <nuxt-link to="/">
            <img src="@/assets/images/logo-primary.svg" alt="Logo" class="w-32 h-auto object-cover">
          </nuxt-link>
          <desktop-input
            :icon="true"
            :iconSearch="true"
            :placeholder="'Cari produk di dystore...'"
          />
        </div>
        <div class="flex items-center gap-1">
          <div class="flex gap-4">
            <button class="sd-btn text-primary">
              <shopping-cart-icon size="1.2x"/>
            </button>
            <div>
              <nuxt-link to="/" class="sd-btn sd-btn-outline-primary text-xs font-semibold">Masuk</nuxt-link>
              <nuxt-link to="/" class="sd-btn sd-btn-primary text-xs font-semibold">Daftar</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingCartIcon } from 'vue-feather-icons'

import DesktopInput from "@/components/desktop/basic/input";
export default {
  components: {
    ShoppingCartIcon,

    DesktopInput
  },
}
</script>

<style>

</style>