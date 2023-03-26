<template>
  <nav
    :class="[filled ? 'filled' : '', modalValue ? 'filled-modal' : '']"
    :style="modalValue && 'z-index: 101'"
  >
    <div class="container-inner">
      <div class="left-container">
        <img
          src="/img/logo.png"
          alt="logo"
          :style="filled && 'filter: invert(100%);'"
        />
      </div>
      <div class="right-container">
        <button class="btn-menu-mbl">
          <img
            v-if="modalValue"
            src="/img/close.png"
            alt="menu"
            class="w-9/12"
            :style="filled && 'filter: invert(100%);'"
            @click="closeModal()"
          />
          <img
            v-else
            src="/img/menu.png"
            alt="menu"
            class="w-9/12"
            :style="filled && 'filter: invert(100%);'"
            @click="openModal()"
          />
        </button>
        <div class="container-desktop hidden">
          <ul class="flex items-center gap-4">
            <li>
              <p @click="goToSection('home')" >Home</p>
            </li>
            <li>
              <p @click="goToSection('about')" >About</p>
            </li>
            <li>
              <p @click="goToSection('portfolio')" >Portfolio</p>
            </li>
            <li>
              <p @click="goToSection('contact')" >Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      filled: false,
    }
  },
  computed: {
    ...mapState({
      modalValue: (state) => state.home.modal,
    }),
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 150) {
        this.filled = true
      } else {
        this.filled = false
      }
    },
    openModal() {
      this.$store.commit('home/SET_MODAL', 'modalnavbar')

      const body = document.querySelector('body')
      body.style.overflow = 'hidden'
    },
    closeModal() {
      this.$store.commit('home/SET_MODAL', 'reset')

      const body = document.querySelector('body')
      body.style.overflow = ''
    },
    goToSection(val) {
      this.$emit('scrollSection', val);
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 20px;
  /* background: #06907b; */
  background: transparent;
  z-index: 99;
}
.container-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav.filled {
  background: white;
  box-shadow: rgb(116 116 116 / 31%) 0px 0px 10px;
}
nav.filled.filled-modal {
  background: transparent;
  box-shadow: unset;
}
nav.filled.filled-modal img {
  filter: unset !important;
}
.left-container img {
  width: 117px;
}
.right-container .btn-menu-mbl {
  width: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
@media (min-width: 840px) {
  .right-container .btn-menu-mbl {
    display: none;
  }
  .right-container .container-desktop {
    display: inline-block;
  }
  .container-desktop li p {
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
  nav.filled .container-desktop li p {
    color: black;
  }
}
@media (min-width: 840px) and (max-width: 1370px) {
  .container-inner {
    max-width: 1214px;
    margin: auto;
  }
}
@media (min-width: 1380px) {
  .container-inner {
    max-width: 1300px;
    margin: auto;
  }
}
</style>
