
<template>
  <section>
    <div class="filter-container">
      <input @input="changeTitleFilter" class="filter-input" type="text" placeholder="  What service are you looking for today?" >
      <button class="filter-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
    
      tags: [
        "logo-design",
        "artisitic",
        "proffesional",
        "accessible"
      ],

    }
  },
  methods: {
    changeTitleFilter(e){
       const path = this.$route.path.split('/')
        console.log('ata dafook',path[path.length - 1].toLowerCase())
       if(path[path.length - 1].toLowerCase() === 'gig'){
         this.$router.replace({ query: {...this.$route.query, title: e.target.value }})
       }else{

         this.$router.push({path:'/gig', query: { title: e.data } })
       }

      console.log('e',e)

    }
  
  },
  computed: {},
  mounted() { },
 
}
</script>