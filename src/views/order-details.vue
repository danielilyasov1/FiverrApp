<template>
  <section class="order-container main-layout equal-padding">
    <div class="order-box" >
      <h1>Seller Details</h1>
      <div class="seller-detaile">
        <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123756949/original/485741b4d2dfd5727cde43edeae7946e1779d69d.jpg" alt="">
        <div class="rate">
          <div class="raters">
              <h3>I will teach you js</h3>
              <h3>{{orders.title}}</h3>
              <div class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9</span> (730)</div>
          </div>
        </div>  
              <h4>Price $200</h4> 
      </div>  
    <hr>
      <div class="order-details-container">
        <div class="head">
      <h1>Orde Details</h1>
        </div>
        <ul class="clean-list">
        <li><i class="checkMark">&#10003;</i>Include Source Code</li>
        <li><i class="checkMark">&#10003;</i>Database Integration</li>
        <li><i class="checkMark">&#10003;</i>Setup File</li>
        <li><i class="checkMark">&#10003;</i>Detailed Code Comments</li>
        <li><i class="checkMark">&#10003;</i>3D Mockup</li>
        <li><i class="checkMark">&#10003;</i>Source File</li>
        </ul>
      </div>
    </div>   
    <div class="chckout-box">
      <div class="calc">
      <h1>Price summary</h1>
      <ul class="clean-list">
        <li>Subtotal<span>$200.00</span></li>
        <li>Service fee<span>$25.00</span></li>
      </ul>
      </div>
      <hr>
      <div class="total">
      <ul class="clean-list">
        <li class="thicker">Total<span>$225.00</span></li>
        <li>Delivery max<span>2 Days</span></li>
      </ul>
      </div>
        <button class="checkout-btn">Chackout</button>
    </div>
  </section>
</template>

<script>
// import { orderService } from '../services/order-service'
   export default {
    data() {
      return {
        //  orders: {},
        // newOrder:{}
      }
    },
   //  async created() {
   //     this.orders = await orderService.query()
   //  },
    created() {
      this.$store.dispatch({ type: 'loadOrders' })
      // this.$store.dispatch({ type: 'loadUsers' })
    },
    methods: {

    },
    computed: {
       orders() {
      return this.$store.getters.orders
    },
    },
    unmounted() {},
  }

</script>