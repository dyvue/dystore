<template>
  <div v-if="$device.isDesktop">
    Desktop View
  </div>
  <div v-else-if="$device.isMobileOrTablet">
    <div>
      <phone-header />
      <div class="ss-page">
        <div>
          <client-only>
            <splide :options="options" has-slider-wrapper>
              <splide-slide v-for="(item, index) in slider.datas" :key="index">
                <img :src="item.images" alt="slide.alt" />
              </splide-slide>
            </splide>
          </client-only>
        </div>
        <div class="mt-5">
          <div class="px-4 flex justify-between items-center">
            <h4 class="text-lg">
              <span class="font-semibold">Kategori</span> Terpopuler
            </h4>
            <nuxt-link to="/" class="text-sm text-primary"
              >Tampilkan Semua</nuxt-link
            >
          </div>
          <div class="relative overflow-auto pb-3">
            <div class="flex pt-4 pl-2">
              <div
                class="px-2"
                v-for="(item, index) of product.category.datas"
                :key="index"
                :class="{ 'pr-4': index == product.category.datas.length - 1 }"
              >
                <phone-card-product-category
                  :name="item.name"
                  :desc="item.desc"
                  :images="item.images"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 mt-5">
          <div class="flex justify-between items-center">
            <h4 class="text-lg">
              <span class="font-semibold">Rekomendasi</span> untuk kamu
            </h4>
          </div>
          <div class="mt-5">
            <div class="flex flex-col gap-2">
              <phone-card-product
                v-for="(item, index) of product.datas"
                :key="index"
                :name="item.name"
                :price="item.price"
                :images="item.images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import PhoneHeader from "@/components/layouts/phone/header";
import PhoneInput from "@/components/layouts/phone/basic/input";
import PhoneCardProductCategory from "@/components/layouts/phone/basic/card/productCategory";
import PhoneCardProduct from "@/components/layouts/phone/basic/card/product";
export default {
  transition: "fade",
  layout: (ctx) => ctx.isMobile ? 'phone/navigation' : 'default',
  components: {
    PhoneHeader,
    PhoneInput,
    PhoneCardProductCategory,
    PhoneCardProduct
  },
  data: () => ({
    options: {
      rewind: true,
      perPage: 1,
      autoplay: true,
      pauseOnHover: false,
      arrow: false
    },
    slider: {
      datas: [],
      loading: false
    },
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
    VIEW() {
      this.STORE_sliders();
      this.STORE_product_categories();
      this.STORE_products();
    },
    STORE_sliders() {
      this.slider.loading = true;
      try {
        const datas = [
          {
            images:"https://ecs7-p.tokopedia.net/img/cache/800/VxWOnu/2021/1/18/5abd0736-d60b-4a16-8666-b59ff7300c9d.jpg.webp"
          },
          {
            images:"https://ecs7-p.tokopedia.net/img/cache/800/VxWOnu/2021/1/11/6c757b03-9c61-459d-b2d7-ee717d07e116.jpg.webp"
          },
          {
            images:"https://ecs7-p.tokopedia.net/img/cache/800/VxWOnu/2021/1/18/392d06b2-df9b-445e-ad3c-03ac3a8d5dc3.jpg.webp"
          },
          {
            images:"https://ecs7-p.tokopedia.net/img/cache/800/VxWOnu/2021/1/18/b3b4af29-2bc2-41db-a002-4727b661ec3c.jpg.webp"
          },
        ];
        this.slider.datas = datas;
      } catch (err) {
        console.error(err);
      }
      this.slider.loading = false;
    },
    STORE_product_categories() {
      this.product.category.loading = true;
      try {
        const datas = [
          {
            name: "Skincare",
            desc: "1024 products",
            images:
              "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
          },
          {
            name: "Sabun Mandi",
            desc: "500 products",
            images:
              "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
          },
          {
            name: "Beer",
            desc: "5023 products",
            images:
              "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
          },
          {
            name: "Kopi",
            desc: "4000 products",
            images:
              "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
          },
          {
            name: "Skincare",
            desc: "1024 products",
            images:
              "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
          },
          {
            name: "Sabun Mandi",
            desc: "500 products",
            images:
              "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
          },
          {
            name: "Beer",
            desc: "5023 products",
            images:
              "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
          },
          {
            name: "Kopi",
            desc: "4000 products",
            images:
              "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
          },
          {
            name: "Skincare",
            desc: "1024 products",
            images:
              "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
          },
          {
            name: "Sabun Mandi",
            desc: "500 products",
            images:
              "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
          },
          {
            name: "Beer",
            desc: "5023 products",
            images:
              "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
          },
          {
            name: "Kopi",
            desc: "4000 products",
            images:
              "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
          },
        ];
        this.product.category.datas = datas;
      } catch (err) {
        console.error(err);
      }
      this.product.category.loading = false;
    },
    STORE_products() {
      this.product.loading = true;
      try {
        const datas = [
          {
            name: "Serum skincare wanita dan pria 100ml",
            price: 359999,
            images:
              "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
          },
          {
            name: "Sabun mandi cair untuk wanita 500ml",
            price: 149999,
            images:
              "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
          },
          {
            name: "Anggur merah cap orang tua 500ml",
            price: 99999,
            images:
              "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
          },
          {
            name: "Kopi semesta siap minum 500ml",
            price: 49999,
            images:
              "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
          },
          {
            name: "Serum skincare wanita dan pria 100ml",
            price: 359999,
            images:
              "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
          },
          {
            name: "Sabun mandi cair untuk wanita 500ml",
            price: 149999,
            images:
              "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
          },
          {
            name: "Anggur merah cap orang tua 500ml",
            price: 99999,
            images:
              "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
          },
          {
            name: "Kopi semesta siap minum 500ml",
            price: 49999,
            images:
              "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
          },
          {
            name: "Serum skincare wanita dan pria 100ml",
            price: 359999,
            images:
              "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
          },
          {
            name: "Sabun mandi cair untuk wanita 500ml",
            price: 149999,
            images:
              "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
          },
          {
            name: "Anggur merah cap orang tua 500ml",
            price: 99999,
            images:
              "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
          },
          {
            name: "Kopi semesta siap minum 500ml",
            price: 49999,
            images:
              "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
          },
        ];
        this.product.datas = datas;
      } catch (err) {
        console.error(err);
      }
      this.product.loading = false;
    }
  }
};
</script>

<style></style>
