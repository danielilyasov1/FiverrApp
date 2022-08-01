<template>
  <div class="dashboard-nav">
    <div class="nav main-layout">
      <div class="options">
        <div class="opt">Orders</div>
        <div class="opt">Notification</div>
        <div class="opt">Messages</div>
      </div>
      <button @click="sellerBuyerToggle" class="user-selles-btn">{{ SwitchTo }}</button>
    </div>
  </div>

  <div class="user-info-container">
    <section class="user-info main-layout flex" v-if="orders">
      <div class="left side">
        <div class="user-details">
          <img class="user-image" :src="user.imgUrl" alt="" />

          <div v-if="!isbuyer" class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 5 </span> (1K+)</div>
          <hr />
          <div class="member-Since">
            <div class="member">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonIcon"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
              <h4 class="since">Member since</h4>
            </div>
            <!-- <h6>{{orders[0].buyer.memberSince}}</h6> -->
            <h4 class="date">May 2021</h4>
          </div>
        </div>

        <div class="progress-container" v-if="!isbuyer">
          <div class="progress">
            <!-- <div>Response Rate <el-progress percentage="98" color="#1dbf73" /></div> -->
            <span class="rate">Response rate </span>
            <el-progress percentage="98" color="#1dbf73" /> <span>Delivered on time</span> <el-progress percentage="85" color="#1dbf73" />
            <span>Order completion</span>
            <el-progress percentage="100" color="#1dbf73" />
          </div>
          <hr />
          <div class="prodress-data">
            <div class="earned">
              Earned in July<span>{{ earned }}</span>
            </div>
            <div class="response">Response time<span>2Hrs</span></div>
          </div>
        </div>
      </div>

      <div class="orders-container">
        <div v-if="(orders, isbuyer)" v-for="order in orders" :key="order._id">
          <div class="order">
            <div class="order-info">
              <img class="gig-img" :src="order.gig.imgs[0]" alt="" />

              <div class="seller">
                <img class="seller-img" :src="order.seller.imgUrl" alt="" />
                <div class="name">{{ order.seller.fullname }}</div>
              </div>

              <div class="price-info">
                <p class="title">Price</p>
                <p class="info">$ {{ order.gig.price }}</p>
              </div>
              <div class="days-info">
                <p class="title">Delivery Time</p>
                <p class="info">{{ order.gig.daysToMake }} Days</p>
              </div>
              <div class="issued">
                <p class="title">Issued At</p>
                <p class="info">{{ order.createdAt }}</p>
              </div>
            </div>

            <div class="status-container">
              <hr />
              <div class="status">
                <h1 class="status-title">Order status:</h1>
                <h1 class="status-info">{{ order.status }}</h1>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!isbuyer" class="sellers-orders-container">
          <div v-if="!sellersOrders" class="no-orders-image-container">
            <div>
              <div class="no-orders-image">
                <img src="../styles/imgs/inbox.png" alt="" />
              </div>
              <div class="no-orders-txt">No Orders Yet</div>
            </div>
          </div>

          <div v-if="sellersOrders" class="manage-orders">
            <h1>Manage Orders</h1>
            <table class="sellers-orders-table">
              <tr class="table-head">
                <th class="buyer">BUYER</th>
                <th></th>
                <th>GIG</th>
                <th>DUE ON</th>
                <th>DELIVERED AT</th>
                <th>TOTAL</th>
                <th>STATUS</th>
              </tr>
              <tr v-for="sellersOrder in sellersOrders" :key="sellersOrder" class="row">
                <td class="buyer"><img class="buyer-img" :src="sellersOrder.buyer.imgUrl" alt="img" /></td>
                <td>{{ sellersOrder.buyer.fullname }}</td>
                <td>{{ sellersOrder.gig.title }}</td>
                <td>{{ sellersOrder.createdAt }}</td>
                <td>{{ sellersOrder.deliveredAt }}</td>
                <td>${{ sellersOrder.gig.price }}</td>
                <td class="statusbtn" @click="changeOrderStatus(sellersOrder._id)">
                  <div class="order-status" :class="color(sellersOrder.status)">{{ sellersOrder.status }}</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { userService } from '../services/user-service'
import { orderService } from '../services/order-service'
import { socketService } from '../services/socket.service'
import { utilService } from '../services/util-service'

export default {
  data() {
    return {
      isbuyer: true,
      SwitchTo: 'Switch to Seller',
    }
  },

  async created() {
    await this.$store.dispatch({ type: 'loadOrders' })
    socketService.on('edit-order', this.editOrder)
  },
  methods: {
    editOrder(newOrder) {
      this.$store.commit({ type: 'addOrder', newOrder })
    },
    async changeOrderStatus(orderId) {
      const curOrder = await orderService.getById(orderId)
      if (curOrder.status === 'Pending') {
        curOrder.status = 'approved'
      } else {
        curOrder.status = 'completed'
      }
      curOrder.deliveredAt = await utilService.getFormattedDate()
      this.$store.dispatch({ type: 'addOrder', newOrder: curOrder })
      const msg = {
        txt: 'Changed Status',
        username: 'Guest',
        miniTxt: 'Your order status has been changed',
      }
      socketService.emit('change status', msg)
    },

    sellerBuyerToggle() {
      this.isbuyer = !this.isbuyer
      this.SwitchTo = 'Switch to Buyer'
      console.log('this.isbuyer', this.isbuyer)
    },
    color(status) {
      console.log('color', status)
      if (status === 'completed') {
        return 'green'
      }
      if (status === 'Pending') {
        return 'oreng'
      }
      if (status === 'approved') {
        return 'blue'
      }
    },
  },
  computed: {
    orders() {
      const ju = this.$store.getters.orders.filter((order) => {
        return order.buyer._id === this.user._id
      })
      return ju
    },
    sellersOrders() {
      const hi = this.$store.getters.orders.filter((order) => {
        return order.seller._id === this.user._id
      })

      return hi
    },
    showTime(time) {
      console.log('this.order.createdAt', time)
    },

    user() {
      return this.$store.getters.user
    },
    earned() {
      let earn = this.sellersOrders.reduce((acc, order) => {
        console.log('earn', order.gig?.price)
        return (acc += Number(order.gig?.price) || 0)
      }, 0)
      console.log('earns', earn)
      return earn
    },
  },
}
</script>
