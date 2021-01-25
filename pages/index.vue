<template>
  <div v-if="$device.isDesktop">
    <desktop-header/>
    <div class="py-8">
      <div class="container mx-auto">
        <div class="flex gap-4">
          <div class="w-8/12">
            <client-only>
              <splide :options="desktop.options" has-slider-wrapper>
                <splide-slide v-for="(item, index) in desktop.slider.datas" :key="index">
                  <img :src="item.images" alt="slide.alt" class="w-full sd-banner object-cover"/>
                </splide-slide>
              </splide>
            </client-only>
          </div>
          <div class="w-4/12">
            <div class="flex flex-col gap-4">
              <img src="https://s4.bukalapak.com/rev-banner/flash_banner/393877956/s-412-196/desktop_GajianGreatSaleVP_b5f2168b-5e87-47d6-92bd-37189c1a0174.jpeg.webp" alt="Golden Ratio" class="h-48">
              <img src="https://s4.bukalapak.com/rev-banner/flash_banner/393877956/s-412-196/desktop_GajianGreatSaleVP_b5f2168b-5e87-47d6-92bd-37189c1a0174.jpeg.webp" alt="Golden Ratio" class="h-48">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6">
      <div class="container mx-auto">
        <h4 class="sd-section-header">Lagi Populer</h4>
        <div class="mt-6">
          <div class="flex gap-4">
            <div v-for="index of 6" :key="index" class="w-2/12">
              <nuxt-link to="/" class="sd-category">
                <img src="https://s4.bukalapak.com/athena/64/s-263-263/img_subcategory.jpeg.webp" alt="Categori 1" class="w-full h-auto object-cover">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8">
      <div class="container mx-auto sd-section-divider">
        <h4 class="mt-6 sd-section-header">Serbu Seru Produk Terbaru</h4>
        <div class="mt-6">
          <div class="flex gap-4">
            <div v-for="index of 6" :key="index" class="w-2/12">
              <nuxt-link to="/" class="sd-category">
                <img src="https://s4.bukalapak.com/athena/64/s-263-263/img_subcategory.jpeg.webp" alt="Categori 1" class="w-full h-auto object-cover">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <desktop-footer/>
  </div>
  <div v-else-if="$device.isMobileOrTablet">
    <phone-header/>
    <div class="ss-page">
      <div>
        <client-only>
          <splide :options="mobile.options" has-slider-wrapper>
            <splide-slide v-for="(item, index) in mobile.slider.datas" :key="index">
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
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import PhoneHeader from "@/components/phone/header";
import PhoneInput from "@/components/phone/basic/input";
import PhoneCardProductCategory from "@/components/phone/basic/card/productCategory";
import PhoneCardProduct from "@/components/phone/basic/card/product";

import DesktopHeader from "@/components/desktop/header";
import DesktopFooter from "@/components/desktop/footer";

export default {
  transition: "fade",
  layout: (ctx) => ctx.isMobileOrTablet ? 'phone/default' : 'desktop/default',
  components: {
    PhoneHeader,
    PhoneInput,
    PhoneCardProductCategory,
    PhoneCardProduct,

    DesktopHeader,
    DesktopFooter,
  },
  data: () => ({
    desktop: {
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
    },
    mobile: {
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
      if (this.$device.isDesktop) {
        this.STORE_Desktop_sliders();
      }
      else if (this.$device.isMobileOrTablet) {
        this.STORE_Mobile_sliders();
      }
      this.STORE_product_categories();
      this.STORE_products();
    },
    STORE_Desktop_sliders() {
      this.desktop.slider.loading = true;
      try {
        const datas = [
          {
            images:"https://s4.bukalapak.com/rev-banner/flash_banner/887507528/s-628-412/desktop_GajianGreatSaleMerchant_88386863-1808-434a-9fe7-79e4fb5445d4.jpeg.webp"
          },
          {
            images:"https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/25/e3c2f664-2d4e-409e-9d8f-59d917acd9bb.jpg.webp"
          },
          {
            images:"https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/22/fcde9794-f31d-44be-a706-1735f8aa9c38.jpg.webp"
          }
        ];
        this.desktop.slider.datas = datas;
      } catch (err) {
        console.error(err);
      }
      this.desktop.slider.loading = false;
    },
    STORE_Mobile_sliders() {
      this.mobile.slider.loading = true;
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
        this.mobile.slider.datas = datas;
      } catch (err) {
        console.error(err);
      }
      this.mobile.slider.loading = false;
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
