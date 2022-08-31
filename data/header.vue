<template>
  <app-header :class="[checkHomeRoute ? 'header-transparent' : 'header-white', checkHomeRoute && isScroll ? 'header-sticky-white' : '']" />
</template>
<script>
export default {
  data() {
    return {
      isScroll: false,
    }
  },
  methods: {
    handleScroll() {
      this.isScroll = true
      if (!window.scrollY ) this.isScroll = false
    },
  },
  computed: {
    checkHomeRoute() {
      const path = this.$route.path.split('/')
      return !path[path.length - 1].toLowerCase() 
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style>
.header-sticky-white {
  background-color: rgb(255, 255, 255);
  color: rgb(109, 105, 105);
}
.header-transparent {
  background-color: rgba(246, 8, 8, 0);
  position: sticky;
  top: 0;
  z-index: 1;
  color: rgb(255, 255, 255);
}
.bg-white {
  background-color: rgb(255, 255, 255);
  position: sticky;
  top: 0;
  z-index: 1;
  color: rgb(109, 105, 108);
}
</style>
