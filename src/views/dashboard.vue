<template>
<section class="user-info main-layout flex" v-if="orders">

    <div class="user-details" >
        <img src="orders[0].buyer.imgUrl" alt="">
        <h2>{{orders[0].buyer.fullname}}</h2>

    </div>

    <div class="orders-container ">
      <div  v-for="order in orders" :key="order._id">
          <div class="order">
              <img :src="order.seller.imgUrl" alt="">
                <div>{{order.seller.fullname}}</div>
              <div>
                 <p>Price</p>
                <p> ${{order.gig.price}}</p>
              </div>
        
              <div>
                 <p>Delivery Time</p>
                <p> ${{order.gig.daysToMake}}</p>
              </div>
              <div>
                 <p>Issued At </p>
                <p> ${{order.gig.createdAt}}</p>
              </div>
  
          </div>
      </div>

    </div>




 

</section>
    
</template>

<script>
    import { userService } from '../services/user-service'

   export default {

    data() {
      return {
        // orders:null,
       
      }
    },
  
    async created() {
        
    // const { userId } = this.$route.params
    // this.user = await userService.getById(userId)
        await this.$store.dispatch({ type: 'loadOrders'})
    
    
    
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