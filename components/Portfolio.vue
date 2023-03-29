<template>
  <section id="Portfolio">
    <div class="container">
      <h2>Our Portfolio</h2>
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/mandiri-bersama.jpg" alt="" />
          </div>
          <p>Mandiri Bersama</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/berkah.jpg" alt="" />
          </div>
          <p>Berkah Pengadaan</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/airtrak.jpg" alt="" />
          </div>
          <p>Airtrak Otr Ban</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/tangga.jpg" alt="" />
          </div>
          <p>Cipta Usaha Niaga</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/gendiswarna.jpg" alt="" />
          </div>
          <p>Gendiswarna</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/wehub.jpg" alt="" />
          </div>
          <p>weHub</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/fth.jpg" alt="" />
          </div>
          <p>Faith.Industries</p>
        </div>
        <div class="item-wrap">
          <div class="img-wrap">
            <img src="/img/portfolio/erukarya.jpg" alt="" />
          </div>
          <p>Fantastis Barbershop</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  padding-top: 40px;
  padding-bottom: 70px;
}
section {
  background: #f3f3f3;
}
h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 22px 0;
  text-transform: uppercase;
  text-align: center;
}
.item-wrap {
  width: 45%;
}
.item-wrap .img-wrap {
  width: 100%;
  height: 165px;
  display: grid;
  place-items: center;
  padding: 20px;
}
.item-wrap .img-wrap img {
  max-height: 104px;
}
.item-wrap p {
  font-size: 14px;
  text-align: center;
  font-weight: 600;
}
@media (min-width: 840px) {
  h2 {
    font-size: 36px;
  }
  .container {
    padding: 70px 0 160px;
  }
  .item-wrap {
    max-width: 20%;
  }
  .item-wrap p {
    font-size: 20px;
  }
}
</style>
