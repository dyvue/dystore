<template>
  <div v-if="$device.isDesktop">
    <desktop-header/>
    <div class="py-6 pb-24">
      <div class="container mx-auto">
        <div class="flex items-center gap-3 pb-6 border-b border-grey">
          <span>Lorem ipsum</span>
          <span><chevron-right-icon size="1x"/></span>
          <span>Lorem</span>
        </div>
        <div class="mt-6">
          <div class="flex items-center gap-4">
            <div class="w-5/12"></div>
            <div class="w-7/12">
              <div class="border-b pb-6 border-grey">
                <h5 class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
                <div class="mt-1 flex items-center gap-2">
                  <span class="flex items-center gap-1">
                    <star-icon v-for="index of 5" :key="index" size=".8x" class="gl-star"/>
                  </span>
                  <span>32 Terjual</span>
                </div>
                <div class="mt-5">
                  <h6 class="text-2xl font-semibold text-primary ft-heading">Rp3.300</h6>
                </div>
                <div class="mt-8">
                  <div class="flex gap-8">
                    <div>
                      <p class="font-semibold">Stok</p>
                      <p class="font-semibold">Berat</p>
                      <p class="font-semibold">Lokasi</p>
                    </div>
                    <div>
                      <p>: 32 barang</p>
                      <p>: 10 gram</p>
                      <p>: Jakarta Utara</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <button class="button-icon"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <desktop-footer/>
  </div>
</template>

<script>
import { ChevronRightIcon, StarIcon } from 'vue-feather-icons'

import PhoneHeader from "@/components/phone/header";
import PhoneInput from "@/components/phone/basic/input";

import DesktopHeader from "@/components/desktop/header";
import DesktopFooter from "@/components/desktop/footer";

export default {
  transition: "fade",
  layout: (ctx) => ctx.isMobileOrTablet ? 'phone/default' : 'desktop/default',
  components: {
    ChevronRightIcon,
    StarIcon,

    PhoneHeader,
    PhoneInput,

    DesktopHeader,
    DesktopFooter
  },
  data: () => ({
    product: {
      datas: [],
      loading: false,
      category: {
        datas: [],
        loading: false
      }
    },
  }),
  mounted() {
    this.VIEW();
  },
  methods: {
    VIEW: function() {
      this.STORE_product_show();
    },
    STORE_product_show: async function() {
      this.product.loading = true;
      try {
        const url = "/member/product/randomize",
        payload = {
          page: 1,
          limit: 24
        },
        __log = await this.$store.dispatch('api/index', { url, payload })
        console.log(__log.data)
        const datas = [
          {
            name: "Serum skincare wanita dan pria 100ml",
            pricefinal: 359999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
              }
            ]
          },
          {
            name: "Sabun mandi cair untuk wanita 500ml",
            pricefinal: 149999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
              }
            ]
          },
          {
            name: "Anggur merah cap orang tua 500ml",
            pricefinal: 99999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
              }
            ]
          },
          {
            name: "Kopi semesta siap minum 500ml",
            pricefinal: 49999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
              }
            ]
          },
          {
            name: "Serum skincare wanita dan pria 100ml",
            pricefinal: 359999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
              }
            ]
          },
          {
            name: "Sabun mandi cair untuk wanita 500ml",
            pricefinal: 149999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
              }
            ]
          },
          {
            name: "Anggur merah cap orang tua 500ml",
            pricefinal: 99999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
              }
            ]
          },
          {
            name: "Kopi semesta siap minum 500ml",
            pricefinal: 49999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
              }
            ]
          },
          {
            name: "Serum skincare wanita dan pria 100ml",
            pricefinal: 359999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
              }
            ]
          },
          {
            name: "Sabun mandi cair untuk wanita 500ml",
            pricefinal: 149999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
              }
            ]
          },
          {
            name: "Anggur merah cap orang tua 500ml",
            pricefinal: 99999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
              }
            ]
          },
          {
            name: "Kopi semesta siap minum 500ml",
            pricefinal: 49999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
              }
            ]
          },
        ];
        this.product.datas = __log.data
      } catch (err) {
        console.error(err);
      }
      this.product.loading = false;
    }
  }
}
</script>

<style>

</style>