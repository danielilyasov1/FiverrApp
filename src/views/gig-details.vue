<template >
  <section class="details-page flex main-layout">
    <div class="gig-details" v-if="gig">
      <h1>{{ gig.title }}</h1>
      <div class="owner-details">
        <img :src="gig.owner.imgUrl">
        <div class="owner-fullname">{{ gig.owner.fullname }}</div>
        <div>&nbsp;{{ gig.owner.level }}</div>
        <div class="space">&nbsp;|&nbsp;</div>
        <div class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9</span> (730)</div>
      </div>
      <div class="block text-center" m="t-4">
        <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false"
          @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
          <vueper-slide v-for="(img, i) in gig.imgs" :key="i" :image="img">
          </vueper-slide>
        </vueper-slides>
        <vueper-slides class="no-shadow thumbnails" ref="vueperslides2"
          @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
          :visible-slides="gig.imgs.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5"
          :arrows="true">
          <vueper-slide v-for="(img, i) in gig.imgs" :key="i" :image="img"
            @click.native="$refs.vueperslides2.goToSlide(i)">
          </vueper-slide>
        </vueper-slides>
        <div class="about-gig">
          <div class="reviews">
            <button>See all reviews</button>
          </div>
          <h2>About This Gig</h2>
          <div class="limit">
            <pre> {{ gig.description }}</pre>
          </div>
        </div>
        <h2 class="aboutH2">About The Seller</h2>
        <div class="about-seller">
          <img :src="gig.owner.imgUrl">
          <div class="owner-details">
            <div class="owner-fullname">{{ gig.owner.fullname }}</div>
            <div class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 5</span> (730)</div>
            <el-button @click='' class="btn-contact" type="info" plain>Contact Me</el-button>
          </div>
        </div>
        <div class="extended-owner-details">
          <ul class="user-state flex clean-list">
            <li>From <br><strong>{{ gig.owner.loc }}</strong></li>
            <li>Avg. response time <br><strong>{{ gig.owner.avgResponceTime }}</strong></li>
            <li>Member since <br><strong>{{ gig.owner.memberSince }}</strong></li>
            <li>Last delivery <br><strong>{{ gig.owner.lastDelivery }}</strong></li>
          </ul>
          <hr>
          <pre>{{ gig.owner.about }}</pre>
        </div>
      </div>
      <!-- <vs-collapse>
          <vs-collapse-item>
            <div slot="header">
              FAQ
            </div>
          </vs-collapse-item>
          </vs-collapse> -->
    </div>
    <div class="side-details sticky">
      <div class="side-price">US${{ gig.price }}</div>
      <div class="side-title">Order Details</div>
      <div class="side-subtitle">{{ gig.title }}</div>
      <div class="side-delivery flex">
        <img src="/clock.png.png" />
        <div>{{ gig.daysToMake }} Days Delivery</div>
      </div>
      <div class="header-list">What's Included</div>
      <ul class="order-features clean-list" v-for="feats in gig.orderFeats" :key="feats">
        <li><i class="checkMark">
          <svg width="16" height="16" viewBox="0 0 11 9" xmins="http://www.w3.org/2000/svg" fill="#1ea968">
            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
          </svg>
        </i>{{ feats }}</li>
      </ul>
      <footer>
        <el-button class="side-btn" @click="createOrder" type="success">Continue ( US${{ gig.price }} ) </el-button>
      </footer>
    </div>
  </section>


  <pre>hiiiiiiiiii{{reviews}}</pre>
</template>

<script>
import { gigService } from '../services/gig-service'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'gig-detail',
  data() {
    return {
      gig: null,
    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadReviews' })

    
    const { gigId } = this.$route.params
    this.gig = await gigService.getById(gigId)
    
  },
  computed: {
    reviews() {
      return this.$store.getters.reviews
    },
  },
  methods: {
    createOrder() {
      const newOrder = {

        "_id": "o1225",
        "createdAt": 9898989,
        "buyer": "mini-user",
        "seller": "mini-user",
        "gig": {
          "name": "DDDDDDDDD",
          "price": 20
        },
        "status": "pending"
      }

      this.$store.dispatch({ type: 'addOrder', order: newOrder })

      console.log('order')
      // this.$router.push(`/user`)
      this.$router.push(`/order`)
    },

  },
  components: {
    VueperSlides,
    VueperSlide,
  },

}
</script>
<style>
.thumbnails {
  margin: auto;
  max-width: 500px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>