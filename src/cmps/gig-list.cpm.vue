<template>
  <div class="mini-filter sticky">

    <PopoverCmp @submit="miniFilter" />

  </div>
  <section class="gig-list grid">
    <div class="card" v-for="gig in gigs" :key="`gig-${gig._id}`">
      <gig-preview :gig="gig" />
    </div>
  </section>
</template>

<script>
import gigPreview from './gig-preview.cmp.vue';
import PopoverCmp from './popover-cmp.vue'
export default {
  name: 'gigList',
  props: {
    gigs: Array,
  },
  components: {
    gigPreview,
    PopoverCmp
  },
  data() {
    return {};
  },
  created() {
    // this.$store.get
  },
  methods: {
    miniFilter(filterBy) {
      const { category, title } = this.$route.query
      const newFilter = { title: title || '', priceBy: { ...filterBy }, category }
      console.log('newFilterrrrrrrr', newFilter)
      this.$store.dispatch({ type: 'setFilterBy', filterBy: newFilter })
    }
  },
  computed: {},
  unmounted() { },
};
</script>