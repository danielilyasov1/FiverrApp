<template>
  <section class="order-container main-layout equal-padding"  v-if="gig">
    <div class="order-box"  >
      <h1>Seller Details</h1>
      <div class="seller-detaile">
        <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123756949/original/485741b4d2dfd5727cde43edeae7946e1779d69d.jpg" alt="">
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
import { userService } from '../services/user-service'
// import { orderService } from '../services/order-service'
   export default {
    data() {
      return {
       gig:null,
      }
    },
  
   async created() {
      this.$store.dispatch({ type: 'loadOrders' })
      const { gigId } = this.$route.params
      this.gig = await gigService.getById(gigId)
    

    
    },
    methods: {
      addOrder(){
        console.log('new order')
          const newOrder= {
             
           "_id":'',
            "createdAt": new Date(),
            "buyer": this.user,
            "seller": this.gig.owner.fullname,
            "gig": {
              "_id": "i101",
              "name": this.gig.title,
              "price": 20
            },
            "status": "pending"
          
          }
           this.$store.dispatch({ type: "addOrder", newOrder: newOrder })
          this.$router.push(`/dashboard`)

          // this.$router.push(`/dashboard/${this.gig._id}`)
      }

    },
    computed: {
       orders() {
      return this.$store.getters.orders
  },
      totalPrice(){
        return this.gig.price+this.gig.serviceFee
      },
        user() {
      return this.$store.getters.user
  
    },
    },
    unmounted() {},
  }

</script>