<template>
  <div
    :class="{
      '': isMobileNavCollapse,
      'border-b': !isMobileNavCollapse,
    }"
    class="navbar flex h-[100px] w-full py-2 items-center justify-between"
  >
    <div
      class="container h-full inline-flex justify-between items-center mx-[10%]"
    >
      <div class="navbar-brand">
        <a href="#">
          <img src="/logo.png" class="w-[150px]" alt="Hestara Logo" />
        </a>
      </div>
      <div @click="checkMobileNav()" class="burger-menu lg:hidden">
        <button
          class="flex justify-center items-center bg-gradient-to-br from-[#b84ed9] to-[#e461b9] hover:saturate-50 w-10 h-8 rounded-md p-[14px]"
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
      </div>
      <div class="navbar-link hidden lg:flex gap-1 mr-5 items-center">
        <ul class="inline-flex text-text items-center">
          <li class="hover:text-primary p-2">
            <a href="#">Home</a>
          </li>
          <li class="p-2">
            <div class="dropdown">
              <div
                @click="checkDropdown()"
                class="dropdown-link relative hover:text-primary cursor-pointer inline-flex gap-2"
              >
                <button>Our Products</button>
                <div class="flex items-center">
                  <button class="arrow-down"></button>
                </div>
              </div>
              <div
                :class="{
                  'dropdown-animate-show translate-y-[0]': isDropdown,
                  'dropdown-animate-hide translate-y-[-10px]': !isDropdown,
                }"
                class="dropdown-content absolute border-2 bg-white text-secondarytext rounded-md grid grid-flow-row top-[120px] py-2 transition-all duration-[0.2s] ease-in-out z-[100]"
              >
                <a href="https://hestara.app/creator-web" class="px-4 py-1"
                  >Hestara Creator Web</a
                >
                <a href="https://hestara.app/creator-system" class="px-4 py-1"
                  >Hestara Creator System</a
                >
              </div>
            </div>
          </li>
          <li class="hover:text-primary p-2">
            <a href="https://hestara.app/pricing">Pricing Plan</a>
          </li>
          <li class="hover:text-primary p-2">
            <a href="https://hestara.app/coming-soon">Case Studies</a>
          </li>
          <li class="hover:text-primary p-2">
            <a href="https://hestaraapp.freshteam.com/jobs">Careers</a>
          </li>
        </ul>
        <a
          href="https://hestera.app/login"
          class="inline-block font-semibold text-white text-[15px] py-[0.4rem] px-[0.9rem] bg-gradient-to-br from-[#b84ed9] to-[#e461b9] hover:from-[#8420a3] hover:to-[#b92f8b] rounded-[35px] tracking-tighter leading-6"
          >Admin Area</a
        >
      </div>
    </div>
  </div>
  <div
    v-if="isMobileNavCollapse"
    class="mobile-nav bg-[#eff1f3] text-text absolute w-full border-b pb-4 px-[10%] z-50"
  >
    <ul>
      <li class="hover:text-primary p-2">
        <a href="#">Home</a>
      </li>
      <li class="p-2">
        <div class="dropdown">
          <div
            @click="checkDropdown()"
            class="dropdown-link relative hover:text-primary cursor-pointer inline-flex gap-2"
          >
            <button>Our Products</button>
            <div class="flex items-center">
              <button class="arrow-down"></button>
            </div>
          </div>
          <div
            v-if="isDropdown"
            class="dropdown-content text-text rounded-md grid grid-flow-row transition-all duration-[0.4s] ease-in-out"
          >
            <a
              href="https://hestara.app/creator-web"
              class="px-4 py-1 hover:text-primary"
              >Hestara Creator Web</a
            >
            <a
              href="https://hestara.app/creator-system"
              class="px-4 py-1 hover:text-primary"
              >Hestara Creator System</a
            >
          </div>
        </div>
      </li>
      <li class="hover:text-primary p-2">
        <a href="https://hestara.app/pricing">Pricing Plan</a>
      </li>
      <li class="hover:text-primary p-2">
        <a href="https://hestara.app/coming-soon">Case Studies</a>
      </li>
      <li class="hover:text-primary p-2">
        <a href="https://hestaraapp.freshteam.com/jobs">Careers</a>
      </li>
    </ul>
    <a
      href="hestera.app/admin"
      class="inline-block font-semibold text-white text-[15px] py-[0.4rem] px-[0.9rem] bg-gradient-to-br from-[#b84ed9] to-[#e461b9] hover:from-[#8420a3] hover:to-[#b92f8b] rounded-[35px] tracking-tighter leading-6"
      >Admin Area</a
    >
  </div>
</template>

<script setup lang="ts">
const isDropdown = ref(false);
function checkDropdown() {
  isDropdown.value = !isDropdown.value;
  console.log("dropdown", isDropdown.value);
}

const isMobileNavCollapse = ref(false);
function checkMobileNav() {
  isMobileNavCollapse.value = !isMobileNavCollapse.value;
  console.log("checkmobile", isMobileNavCollapse.value);
}
</script>

<style>
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid;
}

.dropdown-animate-show {
  opacity: 1;
  visibility: visible;
}

.dropdown-animate-hide {
  opacity: 0;
  visibility: hidden;
}
</style>
