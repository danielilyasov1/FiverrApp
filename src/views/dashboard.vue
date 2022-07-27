<template>
<div class="user-info-container">

<section class="user-info main-layout flex" v-if="orders">

    <div class="user-details" >
        <img src="../../public/userimg.png" alt=""/>
        <h2>King Shani</h2>
        <hr>
        <div class="member-Since">
          <div class="member">
          <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
         <h4 class="since">Member since</h4>
          </div>
       
         <h4 class="date">Jul 2022</h4>

        </div>

    </div>
<div>

  
</div>
    <div class="orders-container ">
      <div  v-for="order in orders" :key="order._id">
      <div>
        
      </div>
          <div class="order">
            <div class="order-info">

            <img class="gig-img" :src="order.gig.img" alt="">

            <img class="seller-img" :src="order.seller.imgUrl" alt="">

              <div class="name">{{order.seller.fullname}}</div>

              <div>
                 <p class="title">Price</p>
                <p class="info"> $ {{order.gig.price}}</p>
              </div>
        
              <div>
                 <p class="title">Delivery Time</p>
                <p class="info"> {{order.gig.daysToMake}} Days</p>
              </div>
              <div class="issued">
                 <p class="title">Issued At </p>
                <p class="info">{{order.createdAt}}</p>
              </div>
            </div>

            <div class="status-container">
              <hr>
              <div class="status">

                <h1 class="status-title">Order status:</h1>
                <h1>{{order.status}}</h1>

              </div>
            </div>
          

        
          </div>
            
      </div>

    </div>




 

</section>

</div>

    
</template>

<script>
    import { userService } from '../services/user-service'

   export default {

    data() {
      return {
        orders:null,
       
      }
    },
  
    async created() {
        
    // const { userId } = this.$route.params
    // this.user = await userService.getById(userId)
        await this.$store.dispatch({ type: 'loadOrders'})
    
    
    
    },
    methods: {

//        showTime() {
//   var date = new Date(time)
//   date = date.toString()
//   //'Wed Jun 01 2022 15:10:52 GMT+0300 (Israel Daylight Time)'
//   date = date.split(" ")
//   //(9) ['Wed', 'Jun', '01', '2022', '15:10:52', 'GMT+0300', '(Israel', 'Daylight', 'Time)']
//   date = date.splice(0, 5)
//   //(5) ['Wed', 'Jun', '01', '2022', '15:10:52']

//   return date
// }

    

    },
    computed: {
      totalPrice(){
        return (+this.gig.price + +this.sFee).toFixed(2)
      },
      orders() {
        return this.$store.getters.orders
      },
      showTime(time){
        console.log('this.order.createdAt',time)
      }
    
    },
    unmounted() {},
  }

</script>