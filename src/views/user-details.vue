
<template>
    <h1>user</h1>
    <pre >{{orders}}</pre>
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



 

  


