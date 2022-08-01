<template>
  <header class="top-header">
    <side-nav v-if="isMenuOpen" @menuToggle="menuToggle"></side-nav>

    <div class="header-container main-layout">
      <button v-if="displayToggle" @click="menuToggle" class="menu-toggle"><i class="fa-solid fa-bars"></i></button>

      <div class="header-row-container">
        <div class="main-logo-container">
          <router-link to="/" :class="[altBackground && textBlack ? 'black-text' : 'while-text', !altBackground ? 'black-text' : '']">
            <h1 class="main-logo">Binderr<span>.</span></h1>
          </router-link>
        </div>

        <app-filter
          to="/app-filter"
          @setFilter="setFilter"
          class="app-filter"
          :class="[
            isFilterDisplayed && altBackground ? 'displaySearch' : '',
            !isFilterDisplayed && altBackground ? 'displaySearchNone' : '',
            !altBackground ? 'filter-category' : '',
          ]"
        ></app-filter>
      </div>

      <nav class="top-header-nav-bar-container">
        <!-- <ul class="nav-bar clean-list flex"> -->
        <ul class="nav-bar">
          <li class="move explore" :class="[altBackground && textBlack ? 'black-text' : 'while-text', !altBackground ? 'black-text' : '']">
            <router-link to="/gig">Explore</router-link>
          </li>
          <li
            v-if="user && !user.isSeller"
            class="move seller"
            :class="[altBackground && textBlack ? 'black-text' : 'while-text', !altBackground ? 'black-text' : '']"
          >
            <router-link to="/">Become a Seller</router-link>
          </li>
          <li
            v-if="!user"
            class="move signIn"
            :class="[altBackground && textBlack ? 'black-text' : 'while-text', !altBackground ? 'black-text' : '']"
          >
            <router-link to="/">Sign In</router-link>
          </li>

          <button
            v-if="!user"
            class="join-btn"
            :class="[altBackground && isJoinBtnGreen ? 'green-btn' : 'join-btn', !altBackground ? 'green-btn' : '']"
            @click="openLoginModal"
          >
            Join
          </button>

          <!-- <div @click="displayUserDropdown"  v-if="user" class="user-image-header">{{user.username}}</div> -->
          <!-- <div @click="displayUserDropdown" v-if="user" class="user-image-header"><img :src="user.imgUrl" alt="" /></div> -->
          <img @click="displayUserDropdown" v-if="user" class="user-image-header" :src="user.imgUrl" />
        </ul>
      </nav>
    </div>
    <div v-if="isUserDropdownDisplay" class="user-dropdown">
      <h1 @click="isUserDropdownDisplay = false">Profile</h1>
      <h1 @click="moveToDashboard">Dashboard</h1>
      <hr @click="isUserDropdownDisplay = false" class="dropdown-hr" />
      <h1 @click="logout">Logout</h1>
    </div>

    <category-filter
      class="category-filter"
      :class="[
        isFilterDisplayed && altBackground ? 'displayFilter' : '',
        !isFilterDisplayed && altBackground ? 'displayFilterNone' : '',
        !altBackground ? 'filter-category' : '',
        isHeaderDashboard ? 'displayFilterNone' : '',
      ]"
    />

    <login @dontDisplayLogin="dontDisplayLogin" class="join-container" v-if="displayLogin"></login>
    <div v-if="displayLogin" class="greyBg" @click="openLoginModal"></div>
  </header>
</template>

<script>
import appFilter from '../cmps/app-filter.cmp.vue'
import categoryFilter from '../cmps/category-filter.cmp.vue'
import login from '../cmps/login.cmp.vue'
import sideNav from '../cmps/side-nav.cmp.vue'
import { socketService } from '../services/socket.service.js'

export default {
  tempalte: ``,
  components: {
    appFilter,
    categoryFilter,
    login,
    sideNav,
  },
  data: () => {
    return {
      // isUserSeller: this.user.isSeller,
      displayToggle: null,
      isMenuOpen: false,
      textBlack: false,
      isJoinBtnGreen: false,
      displayLogin: false,
      isFilterDisplayed: false,

      stickyNav: false,
      isUserDropdownDisplay: false,
      // user:null
    }
  },
  computed: {
    // isUserSeller() {
    //   return this.user.isSeller
    // },
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
      console.log('pathhhhhhhh', path.length - 2)
      return path[path.length - 2].toLowerCase() === 'dashboard'
    },
  },

  methods: {
    dontDisplayLogin() {
      this.displayLogin = false
    },
    handleScroll3(e) {
      if (e.target.innerWidth < 950) this.displayToggle = true
      if (e.target.innerWidth > 950) this.displayToggle = false
    },
    menuToggle() {
      this.isMenuOpen = !this.isMenuOpen
    },
    addMsg(msg) {
      console.log('got msg from back order', msg) //open modal user msg -> the order as been accepeted
    },
    handleScroll(ev) {
      this.isJoinBtnGreen = true
      this.textBlack = true
      if (window.scrollY === 0) {
        this.textBlack = false
        this.isJoinBtnGreen = false
      }
    },
    async moveToDashboard() {
      this.isUserDropdownDisplay = false
      await this.$router.push(`/dashboard/${this.user._id}`)
    },
    async logout() {
      this.isUserDropdownDisplay = false
      await this.$store.dispatch({ type: 'logout' })
    },
    displayUserDropdown() {
      this.isUserDropdownDisplay = !this.isUserDropdownDisplay
    },
    openLoginModal() {
      this.displayLogin = !this.displayLogin
      console.log('  this.displayLogin', this.displayLogin)
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
      const query = {}
      if (this.$route.query.title?.trim()) {
        query.title = this.$route.query.title.trim()
      }
      if (this.$route.query.category) {
        query.category = this.$route.query.category //  יופיע אם אין קטכוריה שלא
      }
      console.log('query', query)

      // this.$emit('setFilter', query)
      this.$store.dispatch({ type: 'setFilterBy', filterBy: query })
    },
  },

  created() {
    window.addEventListener('resize', this.handleScroll3)

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleScroll2)
    // socketService.on('chat addMsg', this.addMsg)
    socketService.on('send to seller', this.addMsg)
    socketService.on('accept', this.addMsg)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleScroll3)
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleScroll2)
    socketService.off('chat addMsg', this.addMsg)
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
.displayFilter {
  display: flex;
  position: fixed;
  top: 78px;
  /* padding-left:200px; */

  background-color: rgb(255, 255, 255);

  color: #74767e;
  font-weight: 400;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  border-top: 1px solid rgb(202, 202, 202);
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
}

.displayFilterNone {
  display: none;
  opacity: 0;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}

.filter-category {
  display: flex;
  background-color: rgb(255, 255, 255);
  color: #74767e;
  font-weight: 400;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
}

.displaySearch {
  /* display: block; */
  opacity: 1;
}

.displaySearchNone {
  /* display: none; */
  opacity: 0;
}
</style>
