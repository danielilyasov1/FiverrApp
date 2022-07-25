<template>
  <section v-if="gig" class="gig-preview" >
    <div class="inner-wrappers">
      <!-- <el-carousel trigger="click" height="160px">
        <el-carousel-item v-for="img in gig.imgs" :key="img" >
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel> -->
      <vueper-slides ref="myVueperSlides" fixed-height="12.12rem">
        <vueper-slide v-for="img in gig.imgs" :key="img" :image="img"/>
      </vueper-slides>

      <div class="seller-identifiers flex " @click="goToDetail">
        <el-avatar :size="24" :src="gig.owner.imgUrl" />
        <a class="seller-name">{{ gig.owner.fullname }}</a>
        <!-- <span class="seller-rate">Seller Rate</span> -->
      </div>
    </div>
    <p class="gig-title" @click="goToDetail">{{ gig.title }}</p>
    <div class="content-info" @click="goToDetail">
      <a>&#9733; 5.0<span>(1K+)</span></a>
    </div>
    <footer class="previw-footer flex">
      <p @click="test" :class="liked">&#10084;</p>
      <div class="flex-col price">
        <small>STARTING AT <span>US${{ gig.price }}.99</span></small>
      </div>
    </footer>

  </section>






</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  props: {
    gig: Object,
  },
  data() {
    return {
      like: false,
    };
  },
  methods: {
    test() {
      // console.log('testtt')
      this.like = !this.like
    },
    goToDetail() {
      // console.log('goToDetail')
      this.$router.push(`/gig/${this.gig._id}`)
    },

  },
  computed: {
    liked() {
      // console.log('ike')
      return { red: this.like }
    },
  },
  created() {
    // console.log('gig', this.gig)
  },
  unmounted() { },
  components: { VueperSlides, VueperSlide },

};
</script>
