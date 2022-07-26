<template>
  <section class="order-container main-layout equal-padding"  v-if="gig">
    <div class="order-box"  >
      <h1>Seller Details</h1>
      <div class="seller-detaile">
        <img :src="gig.imgs[0]" alt="">
        <div class="rate">
          <div class="raters">
              <h3>{{gig.title}}</h3>
            
              <div class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9</span> (730)</div>
          </div>
        </div>  
              <h4>Price ${{gig.price}}</h4> 
      </div>  
    <hr>
      <div class="order-details-container">
        <div class="head">
      <h1>Orde Details</h1>
        </div>
        <ul class="clean-list" v-for="feat in gig.orderFeats" :key="feat">
        <li><i class="checkMark">&#10003;</i>{{feat}}</li>
        
        </ul>
      </div>
    </div>   
    <div class="chckout-box">
      <div class="calc">
      <h1>Price summary</h1>
      <ul class="clean-list">
        <li>Subtotal<span>${{gig.price}}</span></li>
        <li>Service fee<span>${{gig.serviceFee}}</span></li>
      </ul>
      </div>
      <hr>
      <div class="total">
      <ul class="clean-list">
        <li class="thicker">Total<span>${{totalPrice}}</span></li>
        <li>Delivery max<span>{{gig.daysToMake}} days</span></li>
      </ul>
      </div>
        <button @click="addOrder" class="checkout-btn">Checkout</button>
    </div>
  </section>
  
</template>

<script>
import { gigService } from '../services/gig-service'
import { orderService } from '../services/order-service'
import { userService } from '../services/user-service'
// import { orderService } from '../services/order-service'
   export default {
    data() {
      return {
       gig:null,
       user:null,
      }
    },
  
   async created() {
      this.$store.dispatch({ type: 'loadOrders' })
      const { gigId } = this.$route.params
      this.gig = await gigService.getById(gigId)
      this.user = await userService.query()
    
    },
    methods: {
      async addOrder(){
        console.log('new order')
          const newOrder= await orderService.getEmptyOrder()
         

          newOrder.buyer= this.user
          newOrder.seller.fullname=this.gig.owner.fullname
          newOrder.seller.imgUrl=this.gig.owner.imgUrl
          newOrder.gig._id=this.gig._id
          newOrder.gig.title=this.gig.title
          newOrder.gig.price=this.gig.price
          newOrder.gig.daysToMake=this.gig.daysToMake
          console.log('newOrder',newOrder)

        
           this.$store.dispatch({ type: "addOrder", newOrder: newOrder })
          this.$router.push(`/dashboard/${this.user._id}`)

          
      }

    },
    computed: {
       orders() {
      return this.$store.getters.orders
  },
      totalPrice(){
        return (+this.gig.price + +this.gig.serviceFee).toFixed(2)
      },
        user() {
      return this.$store.getters.user
  
    },
    },
    unmounted() {},
  }

</script>