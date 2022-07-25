<template>
  <category-filter class="full" />
  <section class="gig-list grid">
    <div class="card" v-for="gig in gigs" :key="gig._id">
      <gig-preview :gig="gig" />
    </div>
  </section>
</template>

<script>
import gigPreview from './gig-preview.cmp.vue';

export default {
  name: 'gigList',
  props: {
    gigs: Array,
  },
  components: {
    gigPreview,
  },
  data() {
    return {};
  },
  created() { },
  methods: {
  },
  computed: {},
  unmounted() { },
};
</script>