<template>
  <div class="text-black">
    <nav
      v-if="$route.name === 'index'"
      :class="{ 'scrolled': !view.atTopOfPage }"
      class="p-4 ss-max-frame ss-header-index"
    >
      <div class="flex justify-between items-center">
        <phone-input
          :icon="true"
          :iconSearch="true"
          :placeholder="'Cari produk di ' + app_name + '...'"
        />
      </div>
    </nav>
    <nav v-else class="ss-header p-4 mb-24 shadow-lg">
      <div class="flex gap-4 justify-start items-center">
        <a href="javascript:void(0)" @click="$router.go(-1)"
          ><arrow-left-icon
        /></a>
        <h3 class="text-lg font-bold tracking-wide">{{ title }}</h3>
      </div>
    </nav>
  </div>
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";

import PhoneInput from "@/components/phone/basic/input";
export default {
  props: {
    title: String,
    navback: Boolean
  },
  components: {
    ArrowLeftIcon,

    PhoneInput
  },
  computed: {
    app_name() {
      return process.env.APP_NAME;
    },
  },
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    }
  }
};
</script>

<style>
nav.scrolled {
  transition: .4s all;
  @apply shadow-lg;
  @apply bg-white;
}
</style>
