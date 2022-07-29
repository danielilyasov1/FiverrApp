<template>

<div class="dashboard-nav" >
  <div class="nav main-layout">

    <div class="options">
      <div class="opt"> Orders</div>
      <div class="opt"> Notification</div>
      <div class="opt"> Messages</div>
    </div>

       <button @click="sellerBuyerToggle" class="user-selles-btn">Switch to Seller</button>

   </div>
  </div>

<div class="user-info-container">

<section class="user-info main-layout flex" v-if="orders">
    <div class="left side">
      <div class="user-details" >
          <!-- <img :src="orders[0].buyer.imgUrl" alt=""> -->
          <!-- <h2>{{orders[0].buyer.fullname}}</h2> -->
          <div class="user-image">{{user.username}}</div>
          <!-- <img src="../../public/userimg.png" alt=""/>
          <h2>{{user.username}}</h2> -->
          <!-- <pre v-if="user">{{user}}</pre> -->
          <div v-if="!isbuyer" class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9</span> (1K+)</div>
          <hr>
          <div class="member-Since">
            <div class="member">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
          <h4 class="since">Member since</h4>
            </div>
        
          <!-- <h6>{{orders[0].buyer.memberSince}}</h6> -->
          <h4 class="date">jul 7777</h4>

          </div>
      </div>

      <div class="progress-container" v-if="!isbuyer">
      <div class="progress ">
        <!-- <div>Response Rate <el-progress percentage="98" color="#1dbf73" /></div> -->
      <span>Response Rate </span><el-progress percentage="98" color="#1dbf73" />
      <span>Delivered on Time</span><el-progress percentage="85" color="#1dbf73"  />
      <span>Order Completion</span><el-progress percentage="100" color="#1dbf73"  />
      </div>
      <hr>
      <div class="prodress-data">


      </div>
      </div>

    </div>

    <div class="orders-container " >
      <div  v-if="orders,isbuyer"  v-for="order in orders" :key="order._id">
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


     <div v-if="!isbuyer "  class="sellers-orders-container">

      <div  class="no-orders"> shani17751@Gmail.Com's Orders - 0</div>

      <div class="no-orders-image-container">

        <div >
          <div class="no-orders-image">
          <img src="../styles/imgs/inbox.png" alt="">
          </div>
          <div class="no-orders-txt">No Orders Yet </div>
        </div>

      </div>


      <div v-if="sellersOrders" class="manage-orders">
        <h1>Manage Orders</h1>
       <table class="sellers-orders-table">
        <tr class="table-head">
          <th>BUYER</th>
          <th>GIG</th>
          <th>DUE ON</th>
          <th>DELIVERED AT</th>
          <th>TOTAL</th>
          <th>STATUS</th>
        </tr>
        <tr v-for="sellersOrder in sellersOrders" :key="sellersOrder" class="row">
          <!-- <td> <img class="buyer-img" v-if="sellersOrder.buyer.imgUrl" :src="sellersOrder.buyer.imgUrl" alt=""> {{sellersOrder.buyer.fullname}}</td> -->
          <td>{{sellersOrder.buyer.fullname}}</td>
          <td>{{sellersOrder.gig.title}}</td>
          <td>{{sellersOrder.createdAt}}</td>
          <td>{{sellersOrder.deliveredAt}}</td>
          <td>${{sellersOrder.gig.price}}</td>
          <td @click="changeOrderStatus(sellersOrder._id)">{{sellersOrder.status}}</td>
        </tr>
       


       </table>
       <!-- <pre class="pre">
        {{sellersOrders}}
       </pre> -->

      </div>


    </div>

    </div>



 

</section>

</div>

    
</template>

<script>
    // import { userService } from '../services/user-service'
    import { orderService } from '../services/order-service'
    import { utilService } from '../services/util-service'

   export default {

    data() {
      return {
        // user:null,
        // displaySellersOrders: true,
        isbuyer: true,
       
          // user:null,
       
      }
    },
  
    async created() {
        
    // const { userId } = this.$route.params
    // this.user = await userService.getById(userId)
    // console.log('this.user,',this.user)
         await this.$store.dispatch({ type: 'loadOrders'})

    //      const { userId } = this.$route.params
    //      console.log('userId',this.$route.params)
    // this.user = await userService.getById(userId)
    // console.log('this.user',this.user)
    
    
    
    },
    methods: {
      async changeOrderStatus(orderId){
        // console.log('orderId',orderId)
        let curOrder = await orderService.getById(orderId)
        curOrder.status = 'completed'
        curOrder.deliveredAt =  await utilService.getFormattedDate()
        // orderService.saveOrder(curOrder)
        console.log('curOrderr',curOrder)
         this.$store.dispatch({ type: 'addOrder', newOrder: curOrder })
      },

      sellerBuyerToggle(){
        this.isbuyer = !this.isbuyer
        console.log('this.isbuyer',this.isbuyer)

      },
    },
    computed: {
      totalPrice(){
        return (+this.gig.price + +this.sFee).toFixed(2)
      },
      orders() {
        return this.$store.getters.orders.filter(order=> {
          console.log(order)
          console.log(this.user)
          return order.buyer.fullname===this.user.fullname})
      },
       sellersOrders(){

        return this.$store.getters.orders.filter(order=> order.seller.fullname===this.user.fullname)

      },
      showTime(time){
        console.log('this.order.createdAt',time)
      },
        user() {
        console.log('fffffff',this.$store.getters.user)
      return this.$store.getters.user
  
    
    },
  }
   
   }

</script>