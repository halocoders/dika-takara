<template>
  <section id="About">
    <div class="container">
      <h2>What we do</h2>
      <p class="text-info">
        <strong> PT Takara Adidaya Investama </strong> is a holding company
        focusing on Small to Medium market businesses with strong and profitable
        foundations that comprised of different sectors. We're investing for the
        future on behalf of our partners, and supporting our potential local
        communities.
      </p>
      <div class="container-values mt-6">
        <h2>Our Values</h2>
        <div class="container-wrap flex flex-col">
          <div class="img-wrap" style="background: url('/img/man.jpg')"></div>
          <div class="value-text">
            <h3>Equity Investments</h3>
            <p class="values">
              Take part in value creations with businesses that has strong
              fundamental and growth potential
            </p>
            <h3>Financing</h3>
            <p class="values">
              Provide various solutions to help businesses strive while
              capturing opportunities for our investors
            </p>
          </div>
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
  padding-bottom: 40px !important;
}
h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 22px 0;
  text-transform: uppercase;
  text-align: center;
}
h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 22px 0 8px;
  text-transform: uppercase;
}
.text-info {
  text-align: justify;
  line-height: 1.7em;
}
.img-wrap {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  height: 222px;
  filter: grayscale(100%);
}

@media (min-width: 840px) {
  .container {
    padding: 90px 0 120px !important;
  }
  h2 {
    font-size: 32px;
  }
  .container-values h2 {
    margin: 40px 0;
  }
  h3 {
    font-size: 24px;
    margin: 0;
  }
  .container .container-wrap {
    flex-direction: row-reverse;
    gap: 40px;
    justify-content: space-between;
  }
  .container-wrap .img-wrap {
    height: 300px;
    width: 30%;
  }
  .text-info {
    font-weight: 700;
    font-size: 20px;
  }
  .value-text .values {
    font-size: 20px;
    margin-bottom: 32px;
  }
}
</style>
