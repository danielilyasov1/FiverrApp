<template>
   
  <section>
    <app-header
      :class="[altBackground ? 'header-transparent' : 'header-white', altBackground && isHeaderWhite ? 'bg-white' : '']" />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import appHeader from "./cmps/app-header.cmp.vue";
import appFooter from "./cmps/app-footer.cmp.vue";

export default {
  name: "main-app",
  props: [],
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      isHeaderWhite: false,
    };
  },
  methods: {
    handleScroll(ev) {
      this.isHeaderWhite = true
      if (window.scrollY === 0) this.isHeaderWhite = false
    }
  },
  computed: {
    altBackground() {
      const path = this.$route.path.split('/')
      return path[path.length - 1].toLowerCase() === ''
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadGigs' })
    this.$store.dispatch({ type: 'loadReviews' })
    
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  unmounted() { },
};
</script>
<style>

.header-white {
    background-color: rgb(255, 255, 255);
   
}
.header-transparent {
    background-color: rgba(246, 8, 8, 0);
    position: sticky;
    top: 0;
    z-index: 99;
    color: rgb(255, 255, 255);
}
.bg-white{
    background-color: rgb(255, 255, 255);
    position: sticky;
    top: 0;
    z-index: 99;
    
}
</style>


