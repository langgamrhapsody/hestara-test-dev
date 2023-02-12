<template>
  <div class="container-steps mx-[10%] pb-20">
    <div class="title-steps text-center mt-32 mb-10 md:mb-0 lg:mt-12 mx-[10%]">
      <h1
        class="font-semibold text-tertiarytext text-[28px] tracking-tighter pb-2 mb-3"
      >
        Langkah Mudah Release Aplikasi
      </h1>
      <p class="text-text text-sm">
        4 tahap mudah yang dapat Kamu lakukan untuk mengimplementasikan aplikasi
        secara mudah dan cepat
      </p>
    </div>
    <div
      class="row-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-center my-12"
    >
      <div class="content-card">
        <div class="pt-0 md:pt-12">
          <div class="steps pb-5 grid">
            <div
              class="flex justify-center items-center hover:text-white font-bold text-xl bg-white border-2 border-primary rounded-full h-[90px] w-[90px] mx-auto hover:bg-primary transition-colors ease-in-out duration-500"
            >
              01
            </div>
            <p
              class="text-center text-secondarytext font-semibold tracking-tighter text-xl mt-2"
            >
              Ideation
            </p>
            <p
              class="mx-[8%] md:mx-0 items-center text-center text-text text-sm mt-4"
            >
              Deskripsikan ide yang Kamu miliki secara singkat dan jelas agar
              mudah dipahami
            </p>
          </div>
        </div>
      </div>
      <div class="content-card">
        <div class="pt-0 md:pt-12">
          <div class="steps pb-5 grid">
            <div
              class="flex justify-center items-center hover:text-white font-bold text-xl bg-white border-2 border-primary rounded-full h-[90px] w-[90px] mx-auto hover:bg-primary transition-colors ease-in-out duration-500"
            >
              02
            </div>
            <p
              class="text-center text-secondarytext font-semibold tracking-tighter text-xl mt-2"
            >
              Consultation
            </p>
            <p
              class="mx-[8%] md:mx-0 items-center text-center text-text text-sm mt-4"
            >
              Kamu bisa menghubungi <span>admin Hestara</span> untuk menentukan
              jadwal konsultasi secara online maupun offline meeting
            </p>
          </div>
        </div>
      </div>
      <div class="content-card">
        <div class="pt-0 md:pt-12">
          <div class="steps pb-5 grid">
            <div
              class="flex justify-center items-center hover:text-white font-bold text-xl bg-white border-2 border-primary rounded-full h-[90px] w-[90px] mx-auto hover:bg-primary transition-colors ease-in-out duration-500"
            >
              03
            </div>
            <p
              class="text-center text-secondarytext font-semibold tracking-tighter text-xl mt-2"
            >
              Registration
            </p>
            <p
              class="mx-[8%] md:mx-0 items-center text-center text-text text-sm mt-4"
            >
              setelah memutuskan jenis aplikasi yang ingin dibuat, tahap
              selanjutnya adalah kamu bisa melakukan registrasi dan memilih
              package yang sesuai dengan kebutuhan aplikasimu
            </p>
          </div>
        </div>
      </div>
      <div class="content-card">
        <div class="pt-0 md:pt-12">
          <div class="steps pb-5 grid">
            <div
              class="flex justify-center items-center hover:text-white font-bold text-xl bg-white border-2 border-primary rounded-full h-[90px] w-[90px] mx-auto hover:bg-primary transition-colors ease-in-out duration-500"
            >
              04
            </div>
            <p
              class="text-center text-secondarytext font-semibold tracking-tighter text-xl mt-2"
            >
              Release
            </p>
            <p
              class="mx-[8%] md:mx-0 items-center text-center text-text text-sm mt-4"
            >
              Registrasimu sudah berhasil. Sekarang kamu bisa merealisasikan
              aplikasimu dengan memanfaatkan layanan Creator Web dan Creator
              System Hestara
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style>
.steps {
  grid-template-rows: 100px 30px 100px;
}

@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .steps {
    grid-template-rows: 100px 30px 150px;
  }
}
</style>
