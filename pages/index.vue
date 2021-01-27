<template>
  <div v-if="$device.isDesktop">
    <desktop-header/>
    <div class="py-8">
      <div class="container mx-auto">
        <div class="flex gap-4">
          <div class="w-8/12 rounded-xl overflow-hidden">
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
              <img src="https://ali.indohp.com/images/appdata/banner/5c066f5a310d66990ef6f53bda4aaad9.jpeg" alt="Golden Ratio" class="h-48 rounded-xl">
              <img src="https://ali.indohp.com/images/appdata/banner/5dad82682c99dbd6dc5480632fe4f6d9.jpeg" alt="Golden Ratio" class="h-48 rounded-xl">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6">
      <div class="container mx-auto">
        <h4 class="sd-section-header ft-heading">Kategori Terpopuler</h4>
        <div class="mt-6">
          <client-only>
            <splide :options="desktop.options_product_category" has-slider-wrapper>
              <splide-slide v-for="(item, index) of product.category.datas" :key="index" class="pb-1">
                <desktop-card-product-category
                  :name="item.name"
                  :desc="item.desc"
                  :images="item.images"
                />
              </splide-slide>
            </splide>
          </client-only>
        </div>
      </div>
    </div>
    <div class="py-6 pb-24">
      <div class="container mx-auto">
        <h4 class="sd-section-header ft-heading">Produk Terbaru</h4>
        <div class="mt-6">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(item, index) of product.datas" :key="index">
              <desktop-card-product
                :id="item.id"
                :name="item.name"
                :price="item.pricefinal"
                :images="item.product_images[0].s3_url"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <desktop-footer/>
  </div>
  <div v-else-if="$device.isMobileOrTablet">
    <phone-header/>
    <div class="ss-page-index">
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
            <span class="font-semibold ft-heading">Kategori Terpopuler</span>
          </h4>
          <nuxt-link to="/" class="text-sm text-primary"
            >Lihat semua kategori</nuxt-link
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
        <img src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/25/a9dd9db6-ae98-4148-bd30-40595079b446.jpg.webp" alt="Banner" class="w-full h-16 object-cover">
      </div>
      <div class="px-4 mt-5">
        <div class="flex justify-between items-center">
          <h4 class="text-lg">
            <span class="font-semibold">Produk Terbaru</span>
          </h4>
        </div>
        <div class="mt-5">
          <div class="flex flex-col gap-2">
            <phone-card-product
              v-for="(item, index) of product.datas"
              :key="index"
              :code="'0001'"
              :name="item.name"
              :price="item.pricefinal"
              :images="item.product_images[0].s3_url"
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
import DesktopCardProductCategory from "@/components/desktop/basic/card/productCategory";
import DesktopCardProduct from "@/components/desktop/basic/card/product";

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
    DesktopCardProductCategory,
    DesktopCardProduct,
  },
  data: () => ({
    desktop: {
      options: {
        type: "loop",
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
      },
      options_product_category: {
        rewind: true,
        perPage: 8,
        autoplay: true,
        pauseOnHover: false,
        pagination: false
      },
      slider: {
        datas: [],
        loading: false
      },
    },
    mobile: {
      options: {
        type: "loop",
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: false
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
    VIEW: function() {
      if (this.$device.isDesktop) {
        this.STORE_Desktop_sliders();
      }
      else if (this.$device.isMobileOrTablet) {
        this.STORE_Mobile_sliders();
      }
      this.STORE_product_categories();
      this.STORE_products();
    },
    STORE_Desktop_sliders: function() {
      this.desktop.slider.loading = true;
      try {
        const datas = [
          {
            images:"https://ali.indohp.com/images/appdata/banner/5c066f5a310d66990ef6f53bda4aaad9.jpeg"
          },
          {
            images:"https://ali.indohp.com/images/appdata/banner/1fa0816301916c841e1302ee4504cc57.jpeg"
          },
          {
            images:"https://ali.indohp.com/images/appdata/banner/b7442ecd424e5afb30211c97cc80796d.jpeg"
          },
          {
            images:"https://ali.indohp.com/images/appdata/banner/5dad82682c99dbd6dc5480632fe4f6d9.jpeg"
          }
        ];
        this.desktop.slider.datas = datas;
      } catch (err) {
        console.error(err);
      }
      this.desktop.slider.loading = false;
    },
    STORE_Mobile_sliders: function() {
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
    STORE_product_categories: function() {
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
    STORE_products: async function() {
      this.product.loading = true;
      try {
        const datas = [
          {
            id: "00001",
            name: "Serum skincare wanita dan pria 100ml",
            pricefinal: 359999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
              }
            ]
          },
          {
            id: "00002",
            name: "Sabun mandi cair untuk wanita 500ml",
            pricefinal: 149999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
              }
            ]
          },
          {
            id: "00003",
            name: "Anggur merah cap orang tua 500ml",
            pricefinal: 99999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
              }
            ]
          },
          {
            id: "00004",
            name: "Kopi semesta siap minum 500ml",
            pricefinal: 49999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
              }
            ]
          },
          {
            id: "00005",
            name: "Serum skincare wanita dan pria 100ml",
            pricefinal: 359999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
              }
            ]
          },
          {
            id: "00006",
            name: "Sabun mandi cair untuk wanita 500ml",
            pricefinal: 149999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
              }
            ]
          },
          {
            id: "00007",
            name: "Anggur merah cap orang tua 500ml",
            pricefinal: 99999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
              }
            ]
          },
          {
            id: "00008",
            name: "Kopi semesta siap minum 500ml",
            pricefinal: 49999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
              }
            ]
          },
          {
            id: "00009",
            name: "Serum skincare wanita dan pria 100ml",
            pricefinal: 359999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/skincare-moisturizing-cosmetic-products_99236-337.jpg"
              }
            ]
          },
          {
            id: "00010",
            name: "Sabun mandi cair untuk wanita 500ml",
            pricefinal: 149999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/top-view-product-design-with-soap-bottle-mock-up_23-2148434627.jpg"
              }
            ]
          },
          {
            id: "00011",
            name: "Anggur merah cap orang tua 500ml",
            pricefinal: 99999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/craft-beer-arrangement-concept-mock-up_23-2148735332.jpg"
              }
            ]
          },
          {
            id: "00012",
            name: "Kopi semesta siap minum 500ml",
            pricefinal: 49999,
            product_images: [
              {
                s3_url: "https://image.freepik.com/free-psd/cold-brew-coffee-bottle-mockup_35913-1711.jpg"
              }
            ]
          },
        ];
        this.product.datas = datas
      } catch (err) {
        console.error(err);
      }
      this.product.loading = false;
    }
  }
};
</script>

<style></style>
