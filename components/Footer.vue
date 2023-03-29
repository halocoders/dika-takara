<template>
  <footer>
    <div class="container">
      <img src="/img/logo.png" alt="logo" class="mb-10" />
      <h3 class="text-white">PT Takara Adidaya Investama</h3>
      <p class="text-white mb-8">
        Bellagio Office Park <br />
        Jl. Lingkar Mega Kuningan Barat No.3 <br />
        Jakarta 12950
      </p>
      <div class="information-wrap flex flex-wrap flex-col">
        <p class="text-white mb-8">+62 878 7527 8783</p>
        <p class="text-white">&#169; 2023 all right reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  background: #018D73;
  padding-top: 32px !important;
  padding-bottom: 32px !important;
}
img {
  width: 145px;
}
@media (min-width: 840px) {
  .information-wrap {
    flex-direction: row;
    justify-content: space-between;
  }
  .information-wrap p {
    margin: 0;
  }
}
</style>
