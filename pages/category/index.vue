<template>
  <div class="ss-page">
    <phone-header :title="'Kategori'"/>
    <div>
      <div class="ss-category-menu">
        <div class="flex flex-col gap-4">
          <div v-for="index of 50" :key="index" class="ss-category-box p-2 flex flex-col justify-center items-center border border-grey2 rounded-xl">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTQgLTYgMzYgMzYiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLTE3LjIzMiUiIHgyPSIxMDkuNTcyJSIgeTE9IjczLjIwNCUiIHkyPSIzMS4xNzklIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMDMxJSIgc3RvcC1jb2xvcj0iI0ZBQzI4MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNzkzMUUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii0xNy45MjUlIiB4Mj0iNTQuNTIlIiB5MT0iMjAuMTQ5JSIgeTI9IjUxLjkwNSUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOTQ3Q0MxIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzcyNTFBMSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMTI1Ljc4NCUiIHgyPSIyOS4wNzIlIiB5MT0iLTEuMTE0JSIgeTI9IjY0LjAxMiUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4wMzElIiBzdG9wLWNvbG9yPSIjRkFDMjgwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Y3OTMxRSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMTgxLjAwNSUiIHgyPSIzMC4wNDclIiB5MT0iLTUxLjU3NCUiIHkyPSI2NS4yMzklIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk0N0NDMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3MjUxQTEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtNCkiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjY2NyA5LjAxaC05LjMzNGMtLjg5MiAwLTEuNTc4LS44OTItMS4zMDQtMS43ODVsLjU1LTEuNjQ3Yy4yMDUtLjU0OS42ODYtLjg5MiAxLjMwMy0uODkyaDguMDk4Yy42MTggMCAxLjA5OC4zNDMgMS4zMDQuODkybC41NSAxLjY0N2MuNDExLjg5My0uMjc1IDEuNzg1LTEuMTY3IDEuNzg1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYikiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI3LjA0OSAyNy4zMzNINC45NTFhMi43NTMgMi43NTMgMCAwIDEtMi43NDUtMi43NDVWMTAuMDRBMi43NTMgMi43NTMgMCAwIDEgNC45NSA3LjI5NGgyMi4wM2EyLjc1MyAyLjc1MyAwIDAgMSAyLjc0NCAyLjc0NXYxNC41NWMuMDcgMS41MDktMS4xNjYgMi43NDQtMi42NzYgMi43NDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzY2MkQ5MSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjYuOTMzIDcuMjk0SDkuNjE4Yy4zNC4yNzUuNjgxLjQ4IDEuMDkuNjg2IDMuNTQ1IDEuNTc5IDcuOTc2LjI3NSAxMS40NTMgMi4wNi44ODYuNDggMS43MDQgMS4xNjYgMS44NCAyLjE5NS4wNjkuODI0LS4zNCAxLjU3OS0uODg1IDIuMjY1LS41NDYuNjg2LTEuMTYgMS4xNjctMS42MzcgMS44NTMtLjY4MSAxLjAzLS44MTggMi4yNjUtLjQ3NyAzLjQzMS40MSAxLjUxIDEuNjM2IDIuNjc3IDEuOTc3IDQuMTg3LjIwNSAxLjA5OC0uMTM2IDIuMjY0LS42ODEgMy4yOTQgMCAuMDY4LS4wNjkuMTM3LS4wNjkuMTM3aDQuNWMxLjYzNiAwIDMtMS4zMDQgMy0yLjk1MVY5Ljk3MWEyLjc5IDIuNzkgMCAwIDAtMi43OTYtMi42Nzd6IiBvcGFjaXR5PSIuNjQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpzb2Z0LWxpZ2h0Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjE2IiBjeT0iMTcuMzE0IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHJ4PSI3LjYxOCIgcnk9IjcuNTQ5Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjE2IiBjeT0iMTcuMzE0IiBmaWxsPSJ1cmwoI2MpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHJ4PSI1LjU1OSIgcnk9IjUuNDkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkRFMkMyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMS40OSAxNi4zNTNjLS42MTcuOTYtLjc1NSAyLjE5Ni0uNDggMy4yOTQuMzQzLS42ODYuNTQ5LTEuNTEuNTQ5LTIuMzMzIDAtLjM0MyAwLS42MTgtLjA2OS0uOTYxeiIgb3BhY2l0eT0iLjY0Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYiIGN5PSIxNy4zMTQiIHI9IjIuMjY1IiBmaWxsPSJ1cmwoI2QpIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNi4yOTQiIGN5PSIxMC43MjUiIHI9IjEuMzczIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOC40NyA2LjQ3aC00Ljk0Yy0uMjc1IDAtLjQxMi0uMjA1LS40MTItLjQxMSAwLS4yNzUuMjA2LS40MTIuNDExLS40MTJoNC45NDJjLjI3NCAwIC40MTEuMjA2LjQxMS40MTJzLS4xMzcuNDEyLS40MTEuNDEyeiIvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="Kamera" class="w-8">
            <span class="text-xs">Kamera</span>
          </div>
        </div>
      </div>
      <div class="ss-category-sub">
        <div>
          <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minima quaerat rem quisquam debitis, obcaecati reprehenderit error ad consequuntur cum!</p>
          <p class="text-xs mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, placeat?</p>
          <p class="text-xs mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quis esse, tempore corrupti perspiciatis quisquam, repellendus, recusandae odio delectus doloremque rerum asperiores commodi dolorem eius ab? Dolore voluptates cumque blanditiis?</p>
          <p class="text-xs mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quaerat unde, commodi similique quos veritatis, beatae error, ex quam repudiandae dolorem animi tenetur! Cupiditate, ipsum iste at atque, veniam expedita ex minima nobis aperiam tempora, aut distinctio. Amet, itaque porro voluptatum at tempora ipsa facilis.</p>
          <p class="text-xs mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident repellendus et maxime, amet impedit fuga magnam non ut doloribus pariatur vero, repudiandae facilis distinctio?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneHeader from '@/components/phone/header'
export default {
  transition: 'fade',
  layout: (ctx) => ctx.isMobileOrTablet ? 'phone/default' : 'desktop/default',
  components: {
    PhoneHeader
  },
}
</script>

<style>

</style>