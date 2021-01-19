<template>
  <div class="ss-navigation ss-max-frame bottom-0 w-full ss-shadow px-5">
    <ul class="grid grid-cols-5 gap-3">
      <li class="ss-navigation-list" :class="listName('index')">
        <nuxt-link to="/" class="flex flex-col items-center justify-center py-3">
          <home-icon size="1.1x"/>
          <h5 class="text-xs font-semibold mt-1">Beranda</h5>
        </nuxt-link>
      </li>
      <li class="ss-navigation-list" :class="listName('category')">
        <nuxt-link to="/category" class="flex flex-col items-center justify-center py-3">
          <codepen-icon size="1.1x"/>
          <h5 class="text-xs font-semibold mt-1">Kategori</h5>
        </nuxt-link>
      </li>
      <li class="ss-navigation-list" :class="listName('cart')">
        <nuxt-link to="/cart" class="flex flex-col items-center justify-center py-3">
          <shopping-cart-icon size="1.1x"/>
          <h5 class="text-xs font-semibold mt-1">Keranjang</h5>
        </nuxt-link>
      </li>
      <li class="ss-navigation-list" :class="listName('help')">
        <nuxt-link to="/help" class="flex flex-col items-center justify-center py-3">
          <help-circle-icon size="1.1x"/>
          <h5 class="text-xs font-semibold mt-1">Bantuan</h5>
        </nuxt-link>
      </li>
      <li class="ss-navigation-list" :class="listName('account')">
        <nuxt-link to="/account" class="flex flex-col items-center justify-center py-3">
          <user-icon size="1.1x"/>
          <h5 class="text-xs font-semibold mt-1">Akun</h5>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { HomeIcon, CodepenIcon, ShoppingCartIcon, HelpCircleIcon, UserIcon } from 'vue-feather-icons'
export default {
  methods: {
    listName(parr_route_name) {
      const curr_route_name = this.$route.name.split("-")[0]
      if (parr_route_name === curr_route_name) return "active"
      else return ""
    }
  },
  components: {
    HomeIcon,
    CodepenIcon,
    ShoppingCartIcon,
    HelpCircleIcon,
    UserIcon
  }
}
</script>

<style>

</style>