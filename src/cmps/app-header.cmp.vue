
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
          <li v-if="!user"  class="move">
            <router-link to="/">Sign In</router-link>
          </li>
         
          <button v-if="!user" class="join-btn" @click="openLoginModal">Join</button>

          <div @click="displayUserDropdown"  v-if="user" class="user-image-header">{{user.username}}</div>
        </ul>
      </nav>
    </div>
    <div v-if="isUserDropdownDisplay" class="user-dropdown">
      <h1 @click="isUserDropdownDisplay=false">Profile</h1>
      <h1  @click="isUserDropdownDisplay=false">Dashboard</h1>
      <hr  @click="isUserDropdownDisplay=false" class="dropdown-hr">
      <h1 @click="logout">Logout</h1>
    </div> 

   
    
    <category-filter   :class="[isFilterDisplayed && altBackground ? 'displayFilter' : '', !isFilterDisplayed && altBackground ? 'displayFilterNone' : '',
    !altBackground ? 'filter-category' : '', isHeaderDashboard? 'displayFilterNone':'']" />
   
  <login class="join-container" v-if="displayLogin" ></login>
  <div v-if="displayLogin" class="greyBg" @click="openLoginModal"></div>
  </header>


</template>

<script>
import appFilter from "../cmps/app-filter.cmp.vue";
import categoryFilter from "../cmps/category-filter.cmp.vue";
import login from "../cmps/login.cmp.vue";


export default {
  tempalte: ``,
  components: {
    appFilter,
    categoryFilter,
    login,


  },
  data: () => {
    return {
      displayLogin: false,
      isFilterDisplayed: false,

      stickyNav: false,
      isUserDropdownDisplay:false,
      // user:null
    };
  },
  computed: {
     user() {
      return this.$store.getters.user
    },
    altBackground() {
      const path = this.$route.path.split('/')
      // console.log('path',path)
      return path[path.length - 1].toLowerCase() === ''
    },
    isHeaderDashboard() {
      const path = this.$route.path.split('/')
      console.log('pathhhhhhhh',path.length - 2)
      return path[path.length - 2].toLowerCase() === 'dashboard'
    },

  },

  methods: {
     async logout() {
      this.isUserDropdownDisplay=false
      await this.$store.dispatch({ type: 'logout' })
    },
    displayUserDropdown(){
      this.isUserDropdownDisplay=! this.isUserDropdownDisplay

    },
    openLoginModal(){
       this.displayLogin = !this.displayLogin
       console.log('  this.displayLogin',  this.displayLogin)

    },
    // setFilter(filter) {
    //   filter = JSON.parse(JSON.stringify(filter));
    //   this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    // },
    handleScroll2(ev) {
      //  this.isFilterDisplayed= true
      //  console.log('i am scrolling', window.scrollY)
      if (window.scrollY < 200) this.isFilterDisplayed = false
      if (window.scrollY > 200) this.isFilterDisplayed = true
    },
    async setFilter() {
      await this.$route.query.category
      await this.$route.query.title
      const query=  { }
      if(this.$route.query.title?.trim()){
        query.title=this.$route.query.title.trim()
      }
      if(this.$route.query.category){
        query.category=this.$route.query.category//  יופיע אם אין קטכוריה שלא
      }
     console.log('query',query)

      // this.$emit('setFilter', query)
      this.$store.dispatch({ type: "setFilterBy", filterBy: query });
    },
  },

  created() {


    window.addEventListener("scroll", this.handleScroll2)
  },
  destroyed() {

    window.removeEventListener("scroll", this.handleScroll2);
  },
   watch: {
    '$route.query.category'() {
      this.setFilter()
    },
    '$route.query.title'() {
      this.setFilter()
    },
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
