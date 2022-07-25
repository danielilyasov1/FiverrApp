
<template>
  <section>
    <div class="filter-container">
      <input class="filter-input" type="text" placeholder="  What service are you looking for today?">
      <button class="filter-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        title: '',
        // category: this.$route.query.category
        // byCatagories: [],
      },
      tags: [
        "logo-design",
        "artisitic",
        "proffesional",
        "accessible"
      ],

    }
  },
  methods: {
    async setFilter() {
      await this.$route.query.category
      console.log('ff', this.$route.query.category)

      this.$emit('setFilter', {
        ...this.filterBy,
        category: this.$route.query.category,
      })
    },

  },
  computed: {},
  mounted() { },
  watch: {
    '$route.query.category'() {
      this.setFilter()
    }
  }
}
</script>