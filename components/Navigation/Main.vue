<template>
  <nav
    class="navbar flex w-full min-h-[100px] py-2 border-b items-center justify-between"
  >
    <div
      class="container h-full inline-flex justify-between items-center mx-[10%]"
    >
      <div class="navbar-brand">
        <a href="#">
          <img src="/logo.png" class="w-[150px]" alt="Hestara Logo" />
        </a>
      </div>
      <div class="navbar-link flex gap-1 mr-5 items-center">
        <ul class="inline-flex text-text items-center">
          <li class="hover:text-primary p-2">
            <a href="#">Home</a>
          </li>
          <li
            class="dropdown-nav hover:text-primary gap-2 inline-flex p-2 cursor-pointer"
          >
            <a href="#">Our Products</a>
            <div class="flex items-center">
              <div class="arrow-down"></div>
            </div>
          </li>
          <li class="hover:text-primary p-2">
            <a href="#">Pricing Plan</a>
          </li>
          <li class="hover:text-primary p-2">
            <a href="#">Case Studies</a>
          </li>
          <li class="hover:text-primary p-2">
            <a href="#">Careers</a>
          </li>
        </ul>
        <a
          href="#"
          class="inline-block font-semibold text-white text-[15px] py-[0.4rem] px-[0.9rem] bg-gradient-to-br from-[#b84ed9] to-[#e461b9] rounded-[35px] tracking-tighter leading-6"
          >Admin Area</a
        >
      </div>
    </div>
  </nav>
</template>

<script></script>

<style>
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid;
}
</style>
