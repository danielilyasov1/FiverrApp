
<template>
 

<div  class="greyBg" @click="menuToggle"></div>

 <div class="side-nav">
    <button class="join-btn">Join Binderr</button>
        <div class="child" @click="menuToggle">Sign in</div>

    <div class="child categories" @click="openCategories">Browse Categories <span><i class="fa-solid fa-chevron-down"></i></span></div>

    <div class="categories-filter" v-if="isCategoriesOpen">
    <div class="category" @click="setcategory('Logo Design')" >Logo Design</div>
    <div class="category" @click="setcategory('Wordpress')">Wordpress</div>
    <div class="category" @click="setcategory('Voice Over')">Voice Over</div>
    <div class="category" @click="setcategory('Video Explainer')">Video Explainer</div>
    <div class="category" @click="setcategory('Programming')">Programming</div>
    <div class="category" @click="setcategory('Illustration')">Illustration</div>
    </div>
    
    <router-link @click="menuToggle" class="child" to="/gig">Explore</router-link>
    <div class="general">General</div>
    <hr>
    <router-link @click="menuToggle" class="child" to="/">Home</router-link>
    
 </div>
</template>

<script>
    // import { CollapseTransition } from "@ivanv/vue-collapse-transition";
export default {
  data() {
    return {
        isCategoriesOpen: false,
        //  isOpen: false, // closed by default

    }
  },
    components: {
    //   CollapseTransition,
    },
  methods: {
     
    menuToggle(){
         this.$emit("menuToggle", false)

    },
     setcategory(category) {
      console.log('category',category)
      this.menuToggle()
      this.$router.push({ path: '/gig',query: { category: category } })
    },
    openCategories(){
        this.isCategoriesOpen=!  this.isCategoriesOpen
        console.log('isCategoriesOpen',this.isCategoriesOpen)
    }
  
  },
   created() {
    
     

   },
  
   destroyed() {
      

     
   },
  computed: {},
  mounted() { },
 
}
</script>