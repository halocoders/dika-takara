<template>
  <section id="Home" style="background: url('/img/building.jpg')">
    <div
      class="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-60"
    ></div>
    <div class="absolute top-0 right-0 left-0 bottom-0 z-50 grid items-center">
      <h1 class="text-white text-center font-bold text-mobile">
        Takara Adidaya Investama
      </h1>
      <h1 class="text-white text-center font-bold text-desktop hidden">
        Takara Adidaya <br />
        <span> Investama </span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  height: 100vh;
  width: 100%;
  background-size: cover !important;
  background-position: center !important;
  position: relative;
  background-repeat: no-repeat !important;
}
.text-mobile {
  text-transform: uppercase;
  font-size: 36px;
}

@media (min-width: 920px) {
  .text-mobile {
    display: none;
  }
  .text-desktop {
    display: inline-block;
    font-size: 70px;
    text-transform: uppercase;
  }
  .text-desktop span {
    color: #018D73;
  }
}
</style>
