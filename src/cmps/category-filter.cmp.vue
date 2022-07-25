
<template>
<div class="filter-by-category-container ">

  <div class="filter-by-category main-layout ">
    <div class="category " @click="setcategory('')">All</div>
    <div class="category" @click="setcategory('Logo')">Logo Design</div>
    <div class="category" @click="setcategory('Wordpress')">Wordpress</div>
    <div class="category" @click="setcategory('VoiceOver')">Voice Over</div>
    <div class="category" @click="setcategory('VideoExplainer')">Video Explainer</div>
    <div class="category" @click="setcategory('Programming')">Programming</div>
    <div class="category" @click="setcategory('Illustration')">Illustration</div>
  </div>

</div>


</template>

<script>

export default {

  components: {

  },
  data: () => {
    return {


    };
  },
  methods: {
    setcategory(category) {

      this.$router.push({ query: { category: category } })

    },
  },

}
</script>