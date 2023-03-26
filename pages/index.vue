<template>
  <div>
    <Navbar @scrollSection="scrollSection" />
    <div ref="home">
      <Home />
    </div>
    <div ref="about">
      <About />
    </div>
    <div ref="portfolio">
      <Portfolio />
    </div>
    <div ref="contact">
      <Footer />
    </div>
    <ModalNavbarMobile @scrollSection="scrollSection" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    scrollSection(val) {
      const section = this.$refs[val]
      section.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
