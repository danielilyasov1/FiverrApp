<template>
  <div class="heroDeats" v-for="(heroDeats, index) in heroesDetails" :key="heroDeats">
    <div class="heroes" :class="[index !== heroeDetailsIdx ? 'displayHeroDeats' : 'dontDisplayHeroDeats']">
      <img class="home-hero-img" :src="heroDeats.imgUrl" alt="" />
      <img class="mobile-bg" src="/src/styles/imgs/fiverr-mobile-bg.png" alt="" />

      <div class="hero-detail-container main-layout">
        <p v-if="heroDeats.stars" class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p>{{ heroDeats.details }}</p>
      </div>
    </div>
  </div>

  <div class="main-layout">
    <main class="home-page">
      <h1 class="home-title">Find the perfect <span> &nbsp; freelance</span> services for your business</h1>

      <!-- <h1>services for your business</h1> -->
      <div class="search-input">
        <div class="search"><i class="fa-solid fa-magnifying-glass"></i></div>
        <input @change="setTitle" class="input" type="text" placeholder='Try "building mobile app"' />
        <button class="button">Search</button>
      </div>
      <button class="button-mobile">Search</button>

      <!-- <app-filter to="/app-filter" class="main-filter"  @setFilter="setFilter"></app-filter> -->

      <div class="popular-searches">
        Popular:
        <button @click="moveToExploreFilter('Wordpress')">WordPress</button>
        <button @click="moveToExploreFilter('Logo Design')">Logo Design</button>
        <button @click="moveToExploreFilter('Video Explainer')">Video Explainer</button>
        <button @click="moveToExploreFilter('programming')">programming</button>
      </div>
    </main>
  </div>

  <div class="media">
    <div class="imgs">
      <div class="trusted">Trusted By:</div>
      <img class="media-img" src="../styles/imgs/Facebook.png" alt="" />
      <img class="media-img" src="../styles/imgs/google.png" alt="" />
      <img class="media-img" src="../styles/imgs/netflix.png" alt="" />
      <img class="media-img" src="../styles/imgs/pg.png" alt="" />
      <img class="media-img paypal" src="../styles/imgs/paypal.png" alt="" />
    </div>
  </div>

  <h1 class="gallery-title main-layout">Popular professional services</h1>

  <div class="gallery main-layout">
    <button class="btn-left" @click="onSetPages(-1)"><i class="fa-solid fa-angle-left"></i></button>
    <div v-for="categoryCard in this.cardsToDisplay[pageIdx]" :key="categoryCard">
      <div class="option" :class="categoryCard.imgUrlClass" @click="moveToExploreFilter(categoryCard.categoryParams)">
        <p>{{ categoryCard.title }}</p>
        <h1>{{ categoryCard.categoryDisplayName }}</h1>
      </div>
    </div>
    <button class="btn-right" @click="onSetPages(1)"><i class="fa-solid fa-angle-right"></i></button>
  </div>

  <div class="intro">
    <div class="list-img-container main-layout">
      <div class="check-list">
        <h2>A whole world of freelance talent at your fingertips</h2>
        <h6>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path>
          </svg>
          The best for every budget
        </h6>
        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
        <h6>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path>
          </svg>
          Quality work done quickly
        </h6>
        <p>Find the right freelancer to begin working on your project within minutes.</p>
        <h6>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path>
          </svg>
          Protected payments, every time
        </h6>
        <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
        <h6>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"
            ></path>
            <path
              d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
            ></path>
          </svg>
          24/7 support
        </h6>
        <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
      </div>
      <div class="img-container">
        <img
          @click="openVidModal"
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt=""
        />
        <div class="play">&nbsp;<i class="fa-solid fa-play"></i></div>
      </div>
    </div>
    <video v-if="displayVid" @blur="openVidModal" class="vid" autoplay="" controls="" poster="" preload="metadata" crossorigin="anonymous">
      <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4" />
      <track
        label="EN"
        srclang="en-US"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_en-US.00c8c11.vtt"
        default=""
        kind="subtitles"
      />
      <track
        label="DE"
        srclang="de-DE"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_de-DE.479343e.vtt"
        kind="subtitles"
      />
      <track
        label="ES"
        srclang="es"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_es.0e7d9ce.vtt"
        kind="subtitles"
      />
      <track
        label="FR"
        srclang="fr-FR"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_fr-FR.62936b3.vtt"
        kind="subtitles"
      />
      <track
        label="IT"
        srclang="it-IT"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_it-IT.15d2b21.vtt"
        kind="subtitles"
      />
      <track
        label="NL"
        srclang="nl-NL"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_nl-NL.23e247e.vtt"
        kind="subtitles"
      />
      <track
        label="PT"
        srclang="pt-BR"
        src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_pt-BR.b8ba68e.vtt"
        kind="subtitles"
      />
    </video>
    <div v-if="displayVid" class="greyBg"></div>
  </div>

  <div class="founders main-layout">
    <button class="btn-left"><i class="fa-solid fa-angle-left"></i></button>
    <img
      src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
      alt=""
    />
    <div class="description">
      <p>
        Brighid Gannon (DNP,PMHNP-BC),Co-Founder |
        <img
          class="company-logo"
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
          alt=""
        />
      </p>
      <h3>
        "We used Fiverr for SEO, our logo, website, copy, animated videos- literally everything. It was like working with a human right next
        to you versus being across thr world."
      </h3>
    </div>
    <button class="btn-right"><i class="fa-solid fa-angle-right"></i></button>
  </div>
</template>

<script>
import categoryFilter from '../cmps/category-filter.cmp.vue'
export default {
  comments: {
    // appFilter,
  },
  components: {
    categoryFilter,
  },
  data() {
    return {
      heroInterval: null,
      heroeDetailsIdx: 0,
      heroesDetails: [
        {
          stars: '⭐',
          details: 'Moon, Marketing Export',
          // imgUrl: '/src/styles/imgs/fiverr1.png',
          imgUrl: 'public/fiverr1.png',
        },
        {
          stars: '',
          details: 'Zack, Bar Owner',
          imgUrl: '/src/styles/imgs/fiverr2.png',
        },
        {
          stars: '',
          details: 'Rikita, Shoemaker and Designer',
          imgUrl: '/src/styles/imgs/fiverr3.png',
        },
        {
          stars: '⭐',
          details: 'Gabrielle, Video Editor',
          imgUrl: '/src/styles/imgs/fiverr4.png',
        },
        {
          stars: '',
          details: 'Andrea, Fashion Designer',
          imgUrl: '/src/styles/imgs/fiverr5.png',
        },
      ],

      // display5: false,
      displayVid: false,
      pageIdx: 0,
      cardsNumInPage: 5,
      catagories: [
        { categoryDisplayName: 'Logo Design', title: 'Build your brand', categoryParams: 'Logo', imgUrlClass: 'logo' },
        { categoryDisplayName: 'WordPress', title: 'Customize your site', categoryParams: 'Wordpress', imgUrlClass: 'wordPress' },
        { categoryDisplayName: 'VoiceOver', title: 'Share your message', categoryParams: 'VoiceOver', imgUrlClass: 'voice-over' },
        { categoryDisplayName: 'Video Explainer', title: 'Engage your audience', categoryParams: 'VideoExplainer', imgUrlClass: 'video' },
        { categoryDisplayName: 'Programming', title: 'Level up your site', categoryParams: 'Programming', imgUrlClass: 'programming' },
        { categoryDisplayName: 'Illustration', title: 'Color your dreams', categoryParams: 'Illustration', imgUrlClass: 'illustration' },
      ],
    }
  },
  computed: {
    cardsToDisplay() {
      return this.getCardsToDisplay(this.catagories, this.cardsNumInPage)
    },
  },
  created() {
    this.heroInterval = setInterval(() => {
      if (this.heroeDetailsIdx === 4) this.heroeDetailsIdx = -1
      this.heroeDetailsIdx++
      // console.log('this.heroeDetailsIdx',this.heroeDetailsIdx)
    }, 5000)

    window.addEventListener('resize', this.myEventHandler)
  },
  unmounted() {
    window.addEventListener('resize', this.myEventHandler)
  },
  unmounted() {},
  destroyed() {
    clearInterval(this.heroInterval)

    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    async setTitle(e) {
      // await this.$route.query.category
      // console.log('ff', this.$route.query.category)

      // this.$emit('setFilter', {
      //   ...this.filterBy,
      //   category: this.$route.query.category,

      // })
      this.$router.push({ path: '/gig', query: { title: e.target.value } })
    },
    //  async setTitleFilter() {
    //    await this.$route.query.category
    //    this.$router.push({ path: '/gig',query: { title: this.filterBy.title, category: this.$route.query.category} })
    //    // await this.$route.query.title
    //    console.log('ffd', this.$route.query)

    //    this.$emit('setFilter', {
    //      // ...this.filterBy,
    //      title: this.$route.query.title,
    //      category: this.$route.query.category,
    //    })
    //  },
    myEventHandler(e) {
      if (e.target.innerWidth < 650) {
        this.cardsNumInPage = 1
      } else if (e.target.innerWidth < 900) {
        this.cardsNumInPage = 2
      } else if (e.target.innerWidth < 1100) {
        this.cardsNumInPage = 3
      } else if (e.target.innerWidth < 1400) {
        this.cardsNumInPage = 4
      } else if (e.target.innerWidth < 1800) {
        this.cardsNumInPage = 5
      }

      // console.log('this.cardsNumInPage',this.cardsNumInPage)
    },
    getCardsToDisplay(array, size) {
      const newArray = []

      for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size)

        newArray.push(chunk)
      }
      return newArray
      //   this.carrArray= newArray
    },
    onSetPages(dir) {
      let size = this.cardsToDisplay.length
      this.pageIdx += dir
      if (this.pageIdx < 0) this.pageIdx = size - 1
      if (this.pageIdx > size - 1) this.pageIdx = 0
    },
    onSetPage() {
      this.display5 = !this.display5
      console.log('display5', this.display5)
    },
    openVidModal() {
      this.displayVid = !this.displayVid
    },
    moveToExploreFilter(filtercategory) {
      this.$router.push({ path: '/gig', query: { category: filtercategory } })
      // await this.$router.isReady()
      // this.$router.push(`/user`)

      // this.$router.push(`/gig?category=${filtercategory}`)
    },
  },

  unmounted() {},
}
</script>
<style></style>
