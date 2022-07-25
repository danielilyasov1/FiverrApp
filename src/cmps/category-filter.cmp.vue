
<template>
  <div class="filter-by-catagory header-layout">
    <div class="catagory " @click="setCatagory('')">All</div>
    <div class="catagory" @click="setCatagory('Logo')">Logo Design</div>
    <div class="catagory" @click="setCatagory('Wordpress')">Wordpress</div>
    <div class="catagory" @click="setCatagory('VoiceOver')">Voice Over</div>
    <div class="catagory" @click="setCatagory('VideoExplainer')">Video Explainer</div>
    <div class="catagory" @click="setCatagory('Programming')">Programming</div>
    <div class="catagory" @click="setCatagory('Illustration')">Illustration</div>
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