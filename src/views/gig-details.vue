<template >
  <section class="details-page flex">
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

    </div>
    <div class="side-details sticky">
      <div class="side-price">{{ gig.price }} $</div>
      <div class="side-title">{{ gig.category }}</div>
      <div class="side-subtitle">{{ gig.title }}</div>
      <div class="side-delivery flex">
        <img src="/clock.png.png" />
        <div>{{ gig.daysToMake }} Days Delivery</div>
      </div>

      <!-- <vs-collapse>
     <vs-collapse-item>
       <div slot="header">
          What's Included <span>arrow</span>
       </div>
       <ul class="order-features clean-list" v-for="feats in gig.orderFeats" :key="feats">
          <li><i class="checkMark">&#10003;</i>{{feats}}</li>
        </ul>
     </vs-collapse-item>
     </vs-collapse> -->

      <ul class="order-features clean-list" v-for="feats in gig.orderFeats" :key="feats">
        <li><i class="checkMark">&#10003;</i>{{ feats }}</li>
      </ul>
      <footer>
        <el-button class="side-btn" @click="createOrder" type="success">Continue ({{ gig.price }} $)</el-button>
      </footer>

    </div>
  </section>
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

    const { gigId } = this.$route.params
    this.gig = await gigService.getById(gigId)

    console.log('gig s only.\n✔ 100% ')
  },
  computed: {
  },
  methods: {
    findIdx(img) {
      var imgs = this.gig.imgs
      return +Object.keys(imgs).find((key) => imgs[key] === img)
    },
    showBig(img) {
      console.log('big', img);
    },
    createOrder() {
      const newOrder = {

        "_id": "o1225",
        "createdAt": 9898989,
        "buyer": "mini-user",
        "seller": "mini-user",
        "gig": {
          // "_id": this.gig._id,
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