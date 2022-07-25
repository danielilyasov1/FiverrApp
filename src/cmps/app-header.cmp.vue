
<template>
  <header class="top-header">
    <div class="header-container main-layout">
 <div class="header-row-container">
      <div class="main-logo-container">
        <!-- <button class="menu-toggle"><i class="fa-solid fa-bars"></i></button> -->
        <router-link to="/">
          <h1 class="main-logo">Binderr<span>.</span></h1>
        </router-link>
      </div>

       <app-filter to="/app-filter" @setFilter="setFilter" :class="[isFilterDisplayed && altBackground ? 'displaySearch' : '', !isFilterDisplayed && altBackground ? 'displaySearchNone' : '',
      !altBackground ? 'filter-category' : '']"></app-filter>
      </div>

      <nav class="top-header-nav-bar-container">
        <!-- <ul class="nav-bar clean-list flex"> -->
        <ul class="nav-bar ">
          <li class="move">
            <router-link to="/gig">Explore</router-link>
          </li>
          <li class="move">
            <router-link to="/">Become a Seller</router-link>
          </li>
          <li  class="move">
            <router-link to="/">Sign In</router-link>
          </li>
          <button class="join-btn">Join</button>
        </ul>
      </nav>
    </div>
   
   
    
    <category-filter   :class="[isFilterDisplayed && altBackground ? 'displayFilter' : '', !isFilterDisplayed && altBackground ? 'displayFilterNone' : '',
    !altBackground ? 'filter-category' : '']" />
   
  </header>

</template>

<script>
import appFilter from "../cmps/app-filter.cmp.vue";
import categoryFilter from "../cmps/category-filter.cmp.vue";

export default {
  tempalte: ``,
  components: {
    appFilter,
    categoryFilter,

  },
  data: () => {
    return {
      isFilterDisplayed: false,

      stickyNav: false,
    };
  },
  computed: {
    altBackground() {
      const path = this.$route.path.split('/')
      // console.log('path',path)
      return path[path.length - 1].toLowerCase() === ''
    }
  },

  methods: {
    setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter));
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
    handleScroll2(ev) {
      //  this.isFilterDisplayed= true
      //  console.log('i am scrolling', window.scrollY)
      if (window.scrollY < 200) this.isFilterDisplayed = false
      if (window.scrollY > 200) this.isFilterDisplayed = true
    }
  },
  created() {


    window.addEventListener("scroll", this.handleScroll2)
  },
  destroyed() {

    window.removeEventListener("scroll", this.handleScroll2);
  },

}
</script>
<style>
.displayFilter{
  display: flex;
  position: fixed;
  top: 78px;
  /* padding-left:200px; */
  
  background-color: rgb(255, 255, 255);
  z-index: 1000;
  
    color: #74767e;
    font-weight: 400;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    border-top: 1px solid rgb(202, 202, 202);
     transition-duration: 0.4s;
    transition-timing-function: ease-in;
}

.displayFilterNone{
  display: none;
   opacity: 0;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}
.filter-category{
   display: flex;
   background-color: rgb(255, 255, 255); 
    color: #74767e;
    font-weight: 400;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    border-top: 1px solid rgb(202, 202, 202);
     border-bottom: 1px solid rgb(202, 202, 202);

}
.displaySearch{
  /* display: block; */
  opacity: 1;
}
.displaySearchNone{
  /* display: none; */
  opacity: 0;
}

</style>
