<template>
  <div
    v-if="modalValue == 'modalnavbar'"
    class="navbar-modal bg-black fixed top-0 right-0 left-0 bottom-0"
  >
    <ul>
      <li @click="goToSection('home')">Home</li>
      <li @click="goToSection('about')">About</li>
      <li @click="goToSection('portfolio')">Portfolio</li>
      <li @click="goToSection('contact')">Contact</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      modalValue: (state) => state.home.modal,
    }),
  },
  methods: {
    goToSection(val) {
      this.$emit('scrollSection', val);

      this.closeModal();
    },
    closeModal() {
      this.$store.commit('home/SET_MODAL', 'reset')

      const body = document.querySelector('body')
      body.style.overflow = ''
    },
  },
}
</script>

<style scoped>
.navbar-modal {
  z-index: 100;
  background: rgba(0, 0, 0, 0.95);
}
ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
li {
  font-size: 24px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  padding: 12px 20px;
  width: 100%;
  text-align: center;
}
</style>
