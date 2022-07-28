<template>
  <section class="main-layout">
    <h1 class="hcategory">{{ headercategory }}</h1>
    <h3 class="sentence">{{sentence}}</h3>
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
    // this.headercategory = this.$route.query.category
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs
    },
    headercategory() {
      return this.$route.query.category || "All category"
    },
    sentence(){
      switch(this.$route.query.category){
        case 'Logo Design':
          return 'Stand out from the crowd with a logo that fits your brand personality.'
        case 'Wordpress':
          return 'Find a developer to improve your WordPress site or build one from scratch.'
        case 'Voice Over':
          return 'Find the perfect voice for your audio or video in any style, language, or accent.'
        case 'Video Explainer':
          return 'Engage and convince your audience with product videos and live action explainers.'
        case 'Programming':
          return 'Make your dream desktop app from scratch with help from freelance app developers.'
        case 'Illustration':
          return 'Paint a picture for your audience with digital & hand-drawn illustrations.'
        
      }
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
