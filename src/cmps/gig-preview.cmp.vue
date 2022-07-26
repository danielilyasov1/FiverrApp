<template>
  <section v-if="gig" class="gig-preview" >
    <div class="inner-wrappers">
      <vueper-slides ref="myVueperSlides" fixed-height="12.12rem">
        <vueper-slide v-for="img in gig.imgs" :key="img" :image="img"/>
      </vueper-slides>
      <div class="seller-identifiers flex " @click="goToDetail">
        <el-avatar :size="24" :src="gig.owner.imgUrl" />
        <a class="seller-name">{{ gig.owner.fullname }}</a>
      </div>
    </div>
    <p class="gig-title" @click="goToDetail">{{ gig.title }}</p>
    <div class="content-info" @click="goToDetail">
      <a>&#9733; 5.0<span>(1K+)</span></a>
    </div>
    <footer class="previw-footer flex">
      <p @click="test" :class="liked">&#10084;</p>
      <div class="flex price">
        <small>STARTING AT<span>US${{ gig.price }}</span></small>
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
      this.like = !this.like
    },
    goToDetail() {
      this.$router.push(`/gig/${this.gig._id}`)
    },
  },
  computed: {
    liked() {
      return { red: this.like }
    },
  },
  created() {
  },
  unmounted() { },
  components: { VueperSlides, VueperSlide },
};
</script>
