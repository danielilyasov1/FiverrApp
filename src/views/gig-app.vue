<template>
  <section class="main-layout">
    <h1 class="hcategory">{{ headercategory }}</h1>
    <div class="gig-list">
      <gig-list :gigs="gigs" />
    </div>
  </section>
</template>

<script>
import gigList from '../cmps/gig-list.cpm.vue'

export default {
  name: 'gig-app',
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadGigs' })
    this.headercategory = this.$route.query.category
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs
    },
    headercategory() {
      return this.$route.query.category || "All category"
    }
  },
  methods: {
 
  },
  components: {
    gigList,
  },
}
</script>

<style>
</style>
